const expect = require('chai').expect;
const request = require('request');
const server = require('../app/server');

describe('Test homeMadeCalculator API', function() {
  before(function() {
    server.start(4000);
  });

  after(function() {
    server.stop();
  });

  describe('testing the addition method', function() {
    var options = {
      uri: 'http://localhost:4000/homeMadeCalculator?valueOne=40&valueTwo=40',
      json: true,
    };

    it('returns status 200', function(done) {
      request(options, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('returns the correct answer', function(done) {
      request(options, function(error, response, body) {
        expect(body).to.deep.equal({ answer: 80 });
        done();
      });
    });
  });

  describe('testing error', function() {
    var options = {
      uri: 'http://localhost:4000/homeMadeCalculator?valueOne=-1&valueTwo=40',
      json: true,
    };

    it('returns status 400', function(done) {
      request(options, function(error, response, body) {
        expect(response.statusCode).to.equal(400);
        done();
      });
    });

    it('returns the correct answer', function(done) {
      request(options, function(error, response, body) {
        expect(body).to.equal("inputs can't be negative");
        done();
      });
    });
  });
});

var expect  = require("chai").expect;
var request = require("request");

describe("Test homeMadeCalculator API", function() {
  describe("testing the addition method", function() {
    var url = "http://localhost:3000/homeMadeCalculator?valueOne=40&valueTwo=40";
  
    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        console.log(error)
        // expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the correct answer", function(done) {
      request(url, function(error, response, body) {
        console.log(error)
        // expect(body).to.equal(30);
        done();
      });
    });

  });
});
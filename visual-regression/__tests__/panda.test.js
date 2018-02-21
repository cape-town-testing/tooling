const fs = require('fs');
const path = require('path');

const imageCompare = require('./helpers/image-compare');

describe('Panda', () => {
  it('is same', async () => {
    const image = fs.readFileSync(path.join(__dirname, 'assets/panda-new.png'));
    const result = await imageCompare(image, 'panda.png');
    expect(result).toMatchBaseline();
  });
});

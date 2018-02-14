const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const gm = require('gm');

const imageMagick = gm.subClass({ imageMagick: true });

function getImageSize(imageBuffer) {
  return new Promise(resolve => imageMagick(imageBuffer).size((err, size) => resolve(size)));
}

function getImageDiff(actualBuffer, expectedBuffer, diffOuputPath) {
  return new Promise(resolve =>
    imageMagick().compare(actualBuffer, expectedBuffer, { file: diffOuputPath }, (err, isEqual, equality, raw) =>
      resolve({
        error: err,
        noise: equality,
        match: equality === undefined ? 0 : (1 - equality) * 100,
        raw,
        file: diffOuputPath
      })
    )
  );
}

async function getSizesInfo(actualBuffer, expectedBuffer) {
  const [actual, expected] = await Promise.all([getImageSize(actualBuffer), getImageSize(expectedBuffer)]);
  return { actual, expected };
}

async function compareImages(actualBuffer, expectedBuffer, diffOuputPath) {
  const sizes = await getSizesInfo(actualBuffer, expectedBuffer);

  if (sizes.expected.width !== sizes.actual.width || sizes.expected.height !== sizes.actual.height) {
    return {
      errorMessage: `Sizes differ:
        expected image ${sizes.expected.width}px X ${sizes.expected.height}px,
        but got ${sizes.actual.width}px X ${sizes.actual.height}px.`
    };
  }

  return await getImageDiff(actualBuffer, expectedBuffer, diffOuputPath);
}

function addSuffix(filePath, suffix, customExtension) {
  const dirname = path.dirname(filePath);
  const ext = path.extname(filePath);
  const name = path.basename(filePath, ext);
  return path.join(dirname, name + suffix + (customExtension || ext));
}

module.exports = async function imageCompare(actualBuffer, goldenName) {
  const goldenPath = path.join(__dirname, '__images__/golden');
  const outputPath = path.join(__dirname, '__images__/output');

  const expectedGoldenPath = path.join(goldenPath, goldenName);

  const expectedOutputPath = path.join(outputPath, addSuffix(goldenName, '-0-expected'));
  const actualOutputPath = path.join(outputPath, addSuffix(goldenName, '-1-actual'));
  const diffOuputPath = path.join(outputPath, addSuffix(goldenName, '-2-diff'));

  const messageSuffix = `Output saved in "${outputPath}".`;
  fse.outputFileSync(actualOutputPath, actualBuffer);

  if (!fs.existsSync(expectedGoldenPath)) {
    return {
      pass: false,
      message: () => `${goldenName} file not found in "${goldenPath}". ${messageSuffix}`
    };
  }
  fse.copySync(expectedGoldenPath, expectedOutputPath);
  const diff = await compareImages(actualOutputPath, expectedOutputPath, diffOuputPath);

  if (diff.match === 100) {
    fse.removeSync(expectedOutputPath);
    fse.removeSync(actualOutputPath);
    fse.removeSync(diffOuputPath);
    return { pass: true };
  }

  const message = diff.errorMessage ? `${goldenName} mismatch! ${diff.errorMessage}` : `${goldenName} mismatch!`;

  return {
    pass: false,
    message: () => `${message} ${messageSuffix}`
  };
};

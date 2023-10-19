const fs = require('node:fs');
const path = require('node:path');
const imageType = require('image-type');
const sizeOf = require('image-size');

const validateImage = (filePath) => {
  // verify that the file exists
  if (!fs.existsSync(filePath)) {
    return 'File does not exist.';
  }

  // check image type
  const imageBuffer = fs.readFileSync(filePath);
  const type = imageType(imageBuffer);

  if (!type) {
    return `${type} is not a valid image type.`;
  }

  // check size of image and the valid format (jpg, ico, png, jpeg)
  const imageWidth = sizeOf(filePath).width;
  const imageHeight = sizeOf(filePath).height;

  if (['jpeg', 'jpg', 'png', 'ico'].includes(type.ext)) {
    if (
      imageWidth > 60 &&
      imageWidth < 250 &&
      imageHeight > 60 &&
      imageHeight < 250
    ) {
      console.log(`Image Width: ${imageWidth}\n Image Height: ${imageHeight}`);
    } else {
      return 'You must upload an image that is at least 60px by 60px and less than 250px by 250px';
    }
  } else {
    return 'File is not a valid file type (jpeg, jpg, png, ico)';
  }
};

module.exports = validateImage;

const path = require('path');
const crypto = require('crypto');
const multer = require('multer');

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

module.exports = {
  directory: tmpFolder,

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),

  // limits: {},
  // fileFilter: (request, file, callback) => {},
};

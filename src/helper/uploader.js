const multer = require('multer');
var fs = require('fs');

module.exports = {
    uploader(destination, fileNamePrefix) {
        let defaultPath = './assets';
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                const dir = defaultPath + destination;
                if (fs.existsSync(dir)) {
                    cb(null, dir);
                    console.log(dir, 'exists');
                } else {
                    fs.mkdir(dir, { recursive : true }, err => cb(err, dir));
                    console.log(dir, 'made');
                }
            },
            filename: (req, file, cb) => {
                let originalname = file.originalname;
                let ext = originalname.split('.');
                let filename = fileNamePrefix + Date.now() + '.' + ext[ext.length - 1];
                cb(null, filename);
            }
        });
        const imageFilter = (req, file, callback) => {
            const ext = /\.(jpg|jpeg|png|gif|pdf|doc|docx|xlsx)$/;
            if (!file.originalname.match(ext)) {
                return callback(new Error('Only selected file type are allowed'), false);
            }
            callback(null, true);
        };
        return multer({
            storage: storage,
            fileFilter: imageFilter,
        });
    },
};

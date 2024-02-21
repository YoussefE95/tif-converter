const path = require('node:path');
const sharp = require('sharp');

const convertTif = async (tif, scale) => {
    try {
        const name = path.basename(tif);
        const extension = path.extname(tif);

        if (extension !== '.tif' && extension !== '.tiff') {
            console.log('Incorrect file type');
            return;
        } else if (scale <= 0 || scale > 100) {
            console.log('Incorrect scaling factor');
            return;
        }

        const image = sharp(tif, {
            limitInputPixels: false,
        });
        const { width, height } = await image.metadata();
        const resizedImage = image.resize({
            width: Math.round(width * (scale / 100)),
            height: Math.round(height * (scale / 100)),
        });

        resizedImage.jpeg().toFile(`./output/${name}.jpg`);
    } catch (err) {
        console.log(err);
    }
};

convertTif(process.argv[2], Number(process.argv[3]));

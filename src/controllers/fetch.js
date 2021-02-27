const db = require("../models");
const Image = db.images;
const path = require("path");

const fetch_images = (req, res) => {
  Image.findAll()
    .then(images => {
      return res.render(path.join(`${__dirname}/../views/index`), {
        images: images
      });
    })
    .catch(err => console.log(err));
};

module.exports = fetch_images;

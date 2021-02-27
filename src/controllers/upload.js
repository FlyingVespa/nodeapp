const fs = require("fs");
const path = require("path");

const db = require("../models");
const Image = db.images;

const uploadFiles = async (req, res) => {
  try {
    if (req.file == undefined) {
      // return res.send(`You must select a file.`);
      return res.render(path.join(`${__dirname}/../views/index`), {
        msg: "You must select a file."
      });
    }

    Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        __basedir + "/resources/static/assets/uploads/" + req.file.filename
      ),
      location: req.body.location,
      date: req.body.date,
      fileUrl: "/static/assets/uploads/" + req.file.filename
    }).then(image => {
      fs.writeFileSync(
        __basedir + "/resources/static/assets/tmp/" + image.name,
        image.data
      );

      // return res.send(`File has been uploaded.`);
      return res.redirect("/uploads");
    });
  } catch (error) {
    console.log(error);
    // return res.send(`Error when trying upload images: ${error}`);
    return res.render(path.join(`${__dirname}/../views/index`), {
      msg: `Error when trying upload images: ${error}`
    });
  }
};

module.exports = {
  uploadFiles
};

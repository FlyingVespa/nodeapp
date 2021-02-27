const path = require("path");

const home = (req, res) => {
  // return res.sendFile(path.join(`${__dirname}/../views/index.html`));
  return res.render(path.join(`${__dirname}/../views/index`));
};

module.exports = {
  getHome: home
};

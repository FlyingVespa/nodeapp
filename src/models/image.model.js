module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define("image", {
    type: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    },
    fileUrl: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.DATE
    },
    data: {
      type: DataTypes.BLOB("long")
    }
  });

  return Image;
};

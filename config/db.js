const mongoose = require("mongoose");

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error(
      "URI de connexion MongoDB non définie dans les variables d'environnement."
    );
  }

  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(
    `Mongo DB connected : ${conn.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;

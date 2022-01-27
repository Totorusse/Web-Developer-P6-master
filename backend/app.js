const express = require("express");
const bodyParser = require("body-parser");
const sauceRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");
const path = require("path");
const mongoose = require("mongoose");
const mongooseExpressErrorHandler = require("mongoose-express-error-handler");

mongoose
  .connect("mongodb+srv://Totorusse:Piiquante@cluster0.pe4du.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

app.use(express.json());
app.use(mongooseExpressErrorHandler);

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src *; style-src 'self' 'unsafe-inline'; font-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval'"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/sauces", sauceRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;

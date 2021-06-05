const express = require("express");
const app = express();
const cors = require("cors");
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "*" //"https://ding-dong-b6qk4j3vb-ninaspray.vercel.app/"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const tennantControllers = require("./controllers/tennant");
const packageControllers = require("./controllers/package");
const smsControllers = require("./controllers/sms");
const { Router } = require("express");

app.get("/test", (req, res) => {
  response.status(201).json("Hello World");
});

Router("*", cors());
app.use(express.json());

//Tennant
app.post("/tennants", tennantControllers.create);
app.get("/tennants", tennantControllers.list);
app.get("/tennants/:id", tennantControllers.getTennantById);
app.patch("/tennants/:id", tennantControllers.updateTennant);
app.delete("/tennants/:id", tennantControllers.deleteTennant);

//Package
app.post("/tennants/:tennantId/packages", packageControllers.create);
app.get("/packages", packageControllers.getPackage);
app.get(
  "/tennants/:tennantId/packages",
  packageControllers.getPackagesByTenanntsId
);
app.get("/packages/:packageId", packageControllers.getPackageById);
app.patch("/packages/:packageId", packageControllers.updatePackage);

//Twilio
app.post("/sendsms", smsControllers.create);

module.exports = app;

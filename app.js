const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars");

const app = express();
// const hbs = expressHbs.create({
//   layoutsDir: "views/layouts/",
//   defaultLayout: "main-layout",
//   extname: "hbs",
// });

// app.engine("hbs", hbs.engine);
app.set("view engine", "ejs");
app.set("views", "views");

const errorController = require("./controllers/error");
const adminRoute = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoute);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);

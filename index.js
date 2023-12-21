import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.render("index.ejs");
// });

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=231b9bf4c6d68fa909703916887245f5&units=metric"
    );
    res.render("index.ejs", {
      temp: result.data.main.temp,
      wetherDes: result.data.weather[0].description,
      imgURL:
        "http://openweathermap.org/img/wn/" +
        result.data.weather[0].icon +
        "@2x.png",
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/destination", (req, res) => {
  res.render("destination.ejs");
});

app.get("/beaches", async (req, res) => {
  res.render("beaches.ejs");
});

app.get("/landmarks", (req, res) => {
  res.render("landmarks.ejs");
});

app.get("/religious", (req, res) => {
  res.render("religious.ejs");
});

app.get("/shopping", (req, res) => {
  res.render("shopping.ejs");
});

app.get("/zoo", (req, res) => {
  res.render("zoo.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from 'uuid';


const port = 3000;
const app  = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json())
// const id = uuidv4()

let data = []
// let random = Math.floor(Math.random() * id.length)
// const random = id[Math.floor(Math.random() * id.length )]
app.get("/", (req,res) => {
    res.render("index.ejs", {blog: data})
})

app.post("/submit", (req, res) => {
      const title = req.body.title
      const bo = req.body.blog
      data.push({title, blog: bo})
    res.redirect("/")
 }
)

app.listen(port);
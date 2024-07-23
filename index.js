import express from "express";
import ejs from "ejs";
const port = 3000;
const app  = express();

app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/", (req,res) => {
    res.render("index.ejs")
})

app.listen(port);
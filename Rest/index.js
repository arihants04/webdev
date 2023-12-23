const express = require("express");
const app = express();
const path = require("path");
const uuid = require("uuid").v4;
const methodOverride = require("method-override");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

let comments = [
  { username: "Todd", comment: "LOL", id: uuid() },
  { username: "Walt", comment: "So funny", id: uuid() },
  { username: "Nolan", comment: "Haha", id: uuid() },
  { username: "Mark", comment: "Hilarous!!", id: uuid() },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const foundComment = comments.find((c) => c.id === id);
  res.render("comments/edit", { foundComment });
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.get("/tacos", (req, res) => {
  res.send("GET response for /tacos");
});

app.post("/tacos", (req, res) => {
  const { tacotype, qty } = req.body;
  res.send(`Here is ${qty} ${tacotype} tacos`);
});

app.listen(3000, () => {
  console.log("On port 3000!");
});

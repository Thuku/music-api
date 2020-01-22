import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);
// when a random route is inputed
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to music streaming API."
  })
);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

export default app;

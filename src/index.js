import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import pino from "pino";
import expressPino from "express-pino-logger"

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const expressLogger = expressPino({ logger });


const app = express();
const port = process.env.PORT || 3000;

app.use(expressLogger);

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
  logger.info('Server running on port %d', port);
});

export default app;

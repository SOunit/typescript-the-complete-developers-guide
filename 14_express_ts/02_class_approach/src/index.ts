import express from "express";
import { router } from "./routes/loginRoutes";
import { urlencoded } from "body-parser";
import cookieSession from "cookie-session";

const app = express();

// to use post and req.body
app.use(urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["test-test-test"] }));
app.use(router);

const port = 5000;
app.listen(port, () => {
  console.log("listen on", port);
});

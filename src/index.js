import express from "express";
import connectDB from "./config/db";
import Auth from "./routes/auth/auth.routes";
const app = express();

connectDB();

app.use("/api/auth", Auth);

const PORT = process.env.PORT | 5100;

app.listen(PORT, () => {
  console.log(`Server is started at ${PORT}`);
});

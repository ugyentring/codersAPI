import express from "express";

const app = express();

//routes
app.get("/", (req, res) => {
  res.json({ message: "Hello sir" });
});

export default app;

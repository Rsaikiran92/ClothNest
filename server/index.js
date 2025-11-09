const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const { userRouter } = require("./routes/userRoute");

const app = express();
env.config();

app.use(express.json());
app.use("/", userRouter);

app.get("/", (req, res) => {
  res.send("welcome to server");
});

app.listen(8080, async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://saikiran92rk:ZXlauRgzSVf93CBj@cluster0.j8febyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connected to Database");
  } catch (error) {
    console.log("notconnected to Database");
  }
  console.log("server started in 8080 port");
});

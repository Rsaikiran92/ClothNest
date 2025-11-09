const { userModel } = require("../models/userModel");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken ");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (user) {
      return res.status(202).send("user already registered");
    }
    const hastpassword = await bcrypt.hash(req.body.password, 10);
    const newuser = await new userModel({
      ...req.body,
      password: hastpassword,
    });
    await newuser.save();
    var token = jwt.sign({ foo: req.body.email }, "shhhhh",{ expiresIn: '1h' });
    res.status(201).send("account created successfully",token);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(500).send("user not registerd");
    }
    const check = await bcrypt.compare(req.body.password, user.password);
    if (!check) {
      return;
    }
    // localStorage.setItem("jwttoken")
    console.log(check);
    res.send(check);
  } catch (error) {}
});

userRouter.get("/user", async (req, res) => {
  try {
    console.log("saoi");
    let x = await localStorage.setItem("jwttoken", "sdasasasasasas");
    console.log(x);
  } catch (error) {
    console.log("kiran");
    res.send(error);
  }
});

exports.userRouter = userRouter;

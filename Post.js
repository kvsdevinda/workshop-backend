const express = require("express");
const { default: mongoose } = require("mongoose");

const POST = mongoose.model("post", postSchema);
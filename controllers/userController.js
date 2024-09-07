
const express = require("express");

const getUser = async(req, res) => {
    console.log("GET /users request received");
    res.send("hello");
};

module.exports = { getUser };

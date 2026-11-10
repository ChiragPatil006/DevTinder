const express = require("express");

const app = express();

const PORT = 7777;

app.use("/test", (req,res) => {
    res.send("This is a test directory");
})

app.use("/hello", (req,res) => {
    res.send("This is a hello directoryy");
});

app.use("/", (req,res) => {
    res.send("This is an home directory");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
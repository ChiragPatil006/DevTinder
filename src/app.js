const express = require("express");

const app = express();

const PORT = 7777;

// we will not use this much
// app.use("/test", (req,res) => {
//     res.send("This is a test directory");
// })
// app.use("/hello", (req,res) => {
//     res.send("This is a hello directory");
// });
// app.use("/", (req,res) => {
//     res.send("This is an home directory");
// })

app.get("/user", (req,res) => {
    const obj = {
        name: "Chirag Patil",
        age: 21,
    };
    res.send(obj);
})

app.post("/user", async(req,res) => {
    res.send("Data has been posted successfully");
});

app.delete("/user", (req,res) => {
    res.send("Data has been deleted successfully");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
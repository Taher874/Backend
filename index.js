const express = require("express");
require('dotenv').config()

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

app.get("/api/product", (req, res) => {
  res.send("Heloo world");
});

app.get('/login',(req,res)=>{
    res.send('<h1>Login Page</h1>')
})
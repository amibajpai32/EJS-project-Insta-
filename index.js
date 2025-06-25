const express = require("express");
const app = express();
const path = require("path");


const port = 8080;



app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});


app.get("/ig/:username", (req, res) => {
       let { username } = req.params;
       const instaData = require("./data.json");//gets data from data.json
       const data =instaData[username];
       console.log(data);
       res.render("instagram.ejs", { data });
});

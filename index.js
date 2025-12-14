const express = require("express");
const app = express();
const path = require("path");

// --- START: Missing EJS and Static File Setup ---
// 1. Set the view engine to EJS
app.set("view engine", "ejs");
// 2. Set the views directory
app.set("views", path.join(__dirname, "views"));
// 3. Serve static files (like CSS and images) from a 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// --- END: Missing EJS and Static File Setup ---


const port = 8080;

// --- START: Missing Root Route Fix ---
app.get("/", (req, res) => {
    // This route will render the main landing page
    res.render("home.ejs");
});
// --- END: Missing Root Route Fix ---


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    res.render("instagram.ejs", { data });
});

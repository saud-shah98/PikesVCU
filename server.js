const express = require("express");
const app = express(); // create express app
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});
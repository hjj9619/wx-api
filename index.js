let express = require('express');
let app = express();


app.get('/', async (req, res) => {
    res.send("hello world !");
})

app.listen(3000, () => {
    console.log("http://localhost:3000/");
})
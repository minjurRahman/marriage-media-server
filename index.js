const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


//Middle Ware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Salafiyah Nikah server is running');
})

app. listen(port, () =>{
    console.log(`Salafiyah Nikah Server is Running on ${port}`);
} )


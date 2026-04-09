const express = require("express");
const mysql = require("mysql");
const db = require("./config");
const cors = require('cors')
const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

const apis = require("./apis")

app.use('/',apis);

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.message);
        process.exit(1);
    }   
    console.log('Connected to database.');

    app.listen(3000, () => {
        console.log("Server is running at port 3000");
    })
})


const db = require('./config');
const util = require('util');
const queryAsync = util.promisify(db.query).bind(db);
const express = require("express");
const router = express.Router();

router.post("/warehousedb/login", async(req,res) => {
    try{
        const { employeeId } = req.body;
        const query = "SELECT * FROM EMPLOYEE WHERE employee_id = ?";
        const result = await queryAsync(query,[employeeId]);

        if(result.length === 0)
            return res.status(404).json({ message: "Employee Not Found", result: false });

        res.status(201).json({ 
            message: "Employee Found",
            result: result
        });

    } catch (err) {
        res.status(400).json({ error: "Error Occurred", message: err.message });
    }
})

router.post("/warehousedb/query", async(req,res) => {
    try{
        const { query } = req.body;
        const result = await queryAsync(query);
        res.status(201).json({ 
            message: "Query Ran Sucessfully",
            result: result
        });

    } catch (err) {
        res.status(400).json({ error: "Error Occurred", message: err.sqlMessage });
    }
})

module.exports = router;
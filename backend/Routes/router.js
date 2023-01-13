const express = require('express');
const router = new express.Router();
const conn = require("../db/conn");


//register user data
router.post("/create", (req, res) => {

    // console.log(req.body);

    const { name, email, age, mobile, work, add, desc } = req.body;

    if (!name || !email || !age || !mobile || !work || !add || !desc) {
        res.status(422).json("fill all data")

    }
    try {
        conn.query("SELECT * FROM users WHERE email = ?", email, (err, result) => {
            if (result.length) {
                res.status(422).json("This Data is already Exist")
            } else {
                conn.query("INSERT INTO users SET ?", { name, email, age, mobile, work, add, desc }, (err, result) => {
                    if (err) {
                        console.log("err" + err);
                    }
                    else {
                        res.status(201).json(req.body);

                    }
                })
            }
        })

    } catch (error) {
        res.status(422).json("fill all data")

    }

});

module.exports = router;
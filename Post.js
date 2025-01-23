// const express = require("express");
// const router = express.Router();

// router.get("/hello", ()=>{
//        console.log("hello");
// });

// module.exports = router;

const express = require("express");
const router = express.Router();


router.get("/hello", (req, res) => {
    console.log("hello");
    res.send("Hello, world!");  
});

module.exports = router;  

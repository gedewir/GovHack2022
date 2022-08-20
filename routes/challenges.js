const express = require('express');
const router = express.Router();

router.get('/:req-params', (req,res)=>{
    res.render('challenge',{});
});

module.exports = router;

const express = require('express');
const router = express.Router();


// website index
router.get('/', (req, res) => {
    console.log('== get / ==', req.params);
    res.render("website-app", {
        page_title: 'E5O-SPA-MENV - Website'
    });
});


module.exports = router;


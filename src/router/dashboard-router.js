const express = require('express');
const router = express.Router();


// dashboard index
router.get('/', (req, res) => {
    console.log('== get / ==', req.params);
    res.render("dashboard-app", {
        page_title: 'E5O-SPA-MENV - Dashboard'
    });
});


module.exports = router;


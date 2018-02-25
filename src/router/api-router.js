const express = require('express');
const router = express.Router();


// get data /api/
router.get('/', (req, res) => {
    console.log('== get /api/ ==', req.params);
    res.json({
        'api': 'E5O-SPA-MENV',
        'version': '1.0',
        'status': 'ok'
    });
});


module.exports = router;


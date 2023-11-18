const express = require('express');
const router = express.Router();

// GET method to return JSON with content '{uid: 1, name: "Brandon"}'
router.get('/', (req, res) => {
    const user = {
        uid: 1,
        name: "Brandon"
    };
    res.json(user);
});

module.exports = router;

const express = require('express');

const router = express.Router();
const Manager_Group = require('../controllers/Manager.Controller')



router.post('/addManagerGroup',Manager_Group.addManagerGroup)
router.get('/getManagerGroup',Manager_Group.getManagerGroup)

router.get('/test', (req, res) => {
    console.log("request received");
    res.status(200).send("This is Test Page");
});

module.exports = router;
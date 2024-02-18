const express = require('express');
const router = express.Router();
const LeadsController = require('../controllers/LeadsController');

router.get('/',LeadsController.getLeads)
router.get('/:id', LeadsController.getLeadsById);
router.post('/', LeadsController.createLeads);

module.exports = router;

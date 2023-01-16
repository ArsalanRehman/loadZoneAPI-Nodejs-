const express = require('express');
const positionController = require('../controllers/loadPositionController');

const router = express.Router();

router.post('/createLoadZone', positionController.createLoadPosition);
router.get('/getLoadZone', positionController.getAllLoadPosition);
router.patch('/updateLoadZone/:id', positionController.updateLoadPosition);
router.patch(
  '/updateLoadZoneByName',
  positionController.updateLoadPositionByName
);
module.exports = router;

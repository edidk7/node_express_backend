const { Router } = require('express');

const { configs } = require('../configs');
const { controllerHealthcheck } = require('../Controllers/controllerHealthcheck');

const router = Router();

router.get('/healthcheck/', controllerHealthcheck);


module.exports = router;

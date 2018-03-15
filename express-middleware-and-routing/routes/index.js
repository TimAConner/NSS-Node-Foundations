'use strict';
const { Router } = require('express');
const router = Router();

router.use(require(`./homeRoute`));
router.use(require(`./eggRoute`));
router.use(require(`./chickenRoute`));

module.exports = router;
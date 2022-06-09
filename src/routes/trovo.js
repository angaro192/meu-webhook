const express = require('express');

const router = express.Router();

const mensagemTrovoController = require('../controllers/trovoMensagemController');

router.post('/', mensagemTrovoController.getMensagem);

module.exports = router;
const express = require('express');
const router = express.Router();

const piController = require('./controllers/piController');

//router.post('/client', piController.postClient);

//router.delete('/client/:id', piController.deleteClient);

//router.get('/Controlar_veiculo/:id/:n1/:x/:y/:z', piController.getControlar_veiculo); // rota que será utilizada no 6º semestre. busca dado

// router.put('/Controlar_veiculo/:id', piController.putControlar_veiculo); // rota que será utilizada no 6º semestre. insere dado

router.post('/usuario/:usuario/:cpf/:email/:senha/:user',piController.postUsuario);



module.exports = router;
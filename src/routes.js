const express = require('express');
const router = express.Router();

const piController = require('./controllers/piController');

//router.post('/client', piController.postClient);

//router.delete('/client/:id', piController.deleteClient);

//router.get('/Controlar_veiculo/:id/:n1/:x/:y/:z', piController.getControlar_veiculo); // rota que será utilizada no 6º semestre. busca dado

// router.put('/Controlar_veiculo/:id', piController.putControlar_veiculo); // rota que será utilizada no 6º semestre. insere dado

router.post('/usuario/:nome/:cpf/:email/:senha',piController.postUsuario);

router.post('/grupo/:nome_grupo',piController.postGrupo);

router.post('/grupomembro/:id_usuario/:id_grupo',piController.postGrupoMembro);

router.post('/feed/:conteudo/:foto/:tempoTreino',piController.postFeed);

router.post('/reaction/:idPublicacao/:idComentario/:idReacao',piController.postReaction);

router.get('/getUser/:email/:senha',piController.getLogin);

router.get('/getGroup/:id',piController.getGrupo);

router.get('/getPost/:id', piController.getPost);

router.get('/getReaction/:id', piController.getReactionFeed);

router.get('/getReaction/:id', piController.getReactionFeed);

router.delete('/deleteuser/:id',piController.deleteUsuario);

router.delete('/deletegroup/:id',piController.deleteGrupo);

router.delete('/deletepost/:id',piController.deletePost);

router.delete('/deletereac/:id',piController.deleteReaction);

module.exports = router;
// const { postUsuario } = require('../controllers/piController');
// const { postFeed } = require('../controllers/piController');
// const { getGrupo } = require('../controllers/piController');
// const { deleteGrupo } = require('../controllers/piController');
// const { getPost } = require('../controllers/piController');
// const { getReaction } = require('../controllers/piController');
// const { deleteReaction } = require('../controllers/piController');
// const { postReaction } = require('../controllers/piController');
// const { deletePost } = require('../controllers/piController');
// const { deleteUsuario } = require('../controllers/piController');
// const { getUsuario } = require('../controllers/piController');
// const { postGrupo } = require('../controllers/piController');
// const { getClient, deleteClient } = require('../controllers/piController');
const db = require('../db')
module.exports = {

    postUsuario:(usuario,cpf,email,senha) => {
        return new Promise((accept,denied) => {
            db.query('insert into usuario (nome, CPF, email, senha) values (?,?,?,?)',[usuario,cpf,email,senha], (error,result) =>{ 
                	if(error) {denied(error); return}
                    accept(result);
            })
        })
    }
    // ,


//     postGrupo:(nome_grupo) => {
//         return new Promise((accept,denied) => {
//             db.query('insert into grupo (nome_grupo) values (?)',[nome_grupo], (error,result) =>{
//                     if(error) {denied(error); return}
//                     accept(result);
//             })
//         })
//     },

//     postGrupoMembro:(id_usuario,id_grupo) => {
//         return new Promise((accept,denied) => {
//             db.query('insert into grupo_membro (id_usuario, id_grupo) values (?, ?)',[id_usuario,id_grupo], (error,result) =>{
//                     if(error) {denied(error); return}
//                     accept(result);
//             })
//         })
//     },

//     postFeed:(conteudo,foto,tempoTreino) => {
//         return new Promise((accept,denied) => {
//             db.query('insert into feed (conteudo, foto, tempo_treino) values (?,?,?)',[conteudo,foto,tempoTreino], (error,result) =>{
//                     if(error) {denied(error); return}
//                     accept(result);
//             })
//         })
//     },

//     postReaction:(idPublicacao,idComentario,idReacao) => {
//         return new Promise((accept,denied) => {
//             db.query('insert into reacao_control (id_publi, id_coment, id_reacao) values (?,?,?)',[idPublicacao,idComentario,idReacao], (error,result) =>{
//                     if(error) {denied(error); return}
//                     accept(result);
//             })
//         })
//     },

//     getUsuario:(email, senha) => {
//         return new Promise((accept,denied) => {
//             db.query('select nome from usuario where email like \'%?%\' and senha = \'?\'', [email,senha],(error,result) => {
//                     if(error) {denied(error); return}
//                     accept(result);
//             })
//         })
//     },

//     getGrupo:(id) => {
//         return new Promise((accept,denied) => {
//             db.query('select * from grupo where id = ?',[id], (error,result) => {
//                     if(error) {denied(error); return}
//                     accept(result);
//             })
//         })
//     },

//     getFeed:(idGrupo) => {
//         return new Promise((accept,denied) => {
//             db.query('SELECT f.* FROM feed f inner join grupo_membro gm on gm.id_usuario = f.id_usuario and gm.id_grupo = ? order by f.data_publi desc LIMIT 100', [idGrupo], (error,result) => {
//                     if(error) {denied(error); return}
//                     accept(result);
//             })
//         })
//     },

//     getReactionFeed:(idFeed) => {
//         return new Promise((accept,denied) => {
//             db.query('select rc.id_publi, rc.id_reacao, rc.id_reacao, r.nome_reacao, count(1) from reacao_control rc inner join reacao r on (r.id_reacao = rc.id_reacao) where rc.id_publi = ? GROUP BY rc.id_publi, rc.id_reacao, rc.id_reacao, r.nome_reacao', [idFeed],(error,result) => {
//                     if(error) {denied(error); return}
//                     accept(result);
//             })
//         })
//     },

//     getReactionComent:(idComent) => {
//         return new Promise((accept,denied) => {
//             db.query('select rc.id_coment, rc.id_reacao, rc.id_reacao, r.nome_reacao, count(1) from reacao_control rc inner join reacao r on (r.id_reacao = rc.id_reacao) where rc.id_publi = ? GROUP BY rc.id_publi, rc.id_reacao, rc.id_reacao, r.nome_reacao', [idComent],(error,result) => {
//                     if(error) {denied(error); return}
//                     accept(result);
//             })
//         })
//     },


//     deleteUsuario:() => {
//         return new Promise((accept,denied) => {
//             db.query('', (error,result) => {
//                     if(error) {denied(error); return}
//                     accept(result);
//             })
//         })
//     },

//     deleteGrupo:() => {
//         return new Promise((accept,denied) => {
//             db.query('', (error,result) => {
//                     if(error) {denied(error); return}
//                     accept(result);
//             })
//         })
//     },

//     deletePost:() => {
//         return new Promise((accept,denied) => {
//             db.query('', (error,result) => {
//                     if(error) {denied(error); return}
//                     accept(result);
//             })
//         })
//     },

//     deleteReaction:() => {
//         return new Promise((accept,denied) => {
//             db.query('', (error,result) => {
//                     if(error) {denied(error); return}
//                     accept(result);
//             })
//         })
//     },

 };
   
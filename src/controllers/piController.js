const { json } = require('body-parser');
const servicesPI = require('../services/servicesPI');


module.exports = {    
    postUsuario: async(req,res) => {
    let usuario = req.params.nome;
    let cpf = req.params.cpf;
    let email = req.params.email;
    let senha = req.params.senha;
    
    let user = await servicesPI.postUsuario(usuario,cpf,email,senha)

    res.json(user);
    }
    
    //,

//     postGrupo: async(req,res) => {    
//     let nome_grupo = req.params.nome_grupo;
//     let group = await servicesPI.postGrupo(nome_grupo)

//     res.json(group);
//     },

//     postGrupoMembro: async(req,res) => {
//     let id_usuario = req.params.id_usuario;
//     let id_grupo = req.params.id_grupo;
//     let member = await servicesPI.postGrupoMembro(id_usuario, id_grupo)

//     res.json(member);
//     },

//     postFeed: async(req,res) => {
//     let conteudo = req.params.conteudo;
//     let foto = req.params.foto;
//     let tempoTreino = req.params.tempoTreino;
//     let feed = await servicesPI.postFeed(conteudo,foto,tempoTreino)

//     res.json(feed);
//     },

//     postReaction: async(req,res) => {
//     let idPublicacao = req.params.idPublicacao;
//     let idComentario = req.params.idComentario;
//     let idReacao = req.params.idReacao;
//     let reation = await servicesPI.postReaction(idPublicacao,idComentario,idReacao)
    
//     res.json(reation);
//     },

// // Metodo para consultar as variaveis 

//     getLogin: async (req,res) => {
//     let email = req.params.email;
//     let senha = req.params.senha;
//     let login = await servicesPI.getUsuario(email, senha)
    
//     res.json(login);
//     },
    
//     getGrupo: async (req,res) => {
//     let id = req.params.id;
//     let grupo_id = await servicesPI.getGrupo(id)
        
//     res.json(grupo_id);
//     },        

//     //verificar isso aqui
//     getFeed: async(req,res) => {
//     let idGrupo = req.params.idGrupo;
//     let post_id = await servicesPI.getFeed(idGrupo)
    
//     res.json(post_id);
//     },

//     getReactionFeed: async(req,res) => {
//     let id = req.params.id;
//     let reaction_id = await servicesPI.getReaction(idFeed)

//     res.json(reaction_id);
//     },
    
//     getReactionComent: async(req,res) => {
//     let id = req.params.id;
//     let reaction_id = await servicesPI.getReaction(idComent)
    
//     res.json(reaction_id);
//     },

//   // Aba para deletar coisas 

//     deleteUsuario: async (req,res) => {
//     let id = req.params.id;
//     let removed_user = await servicesPI.deleteUsuario(id)

//     res.json(removed_user);
//     },

//     deleteGrupo: async (req,res) => {
//         let id = req.params.id;
//         let removed_group = await servicesPI.deleteGrupo(id)
    
//         res.json(removed_group);
//         },
    
//     deletePost: async (req,res) => {
//         let id = req.params.id;
//         let removed_post = await servicesPI.deletePost(id)

//         res.json(removed_post);
//         },
    
//     deleteReaction: async (req,res) => {
//         let id = req.params.id;
//         let removed_reaction = await servicesPI.deleteReaction(id)
    
//         res.json(removed_reaction);
//         }

}
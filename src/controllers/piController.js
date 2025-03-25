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
    },

    postGrupo: async(req,res) => {    
    let nome_grupo = req.params.nome_grupo;
    let group = await servicesPI.postGrupo(nome_grupo)

    res.json(group);
    },

    postGrupoMembro: async(req,res) => {
    let id_usuario = req.params.id_usuario;
    let id_grupo = req.params.id_grupo;
    let member = await servicesPI.postGrupoMembro(id_usuario, id_grupo)

    res.json(member);
    },

    postFeed: async(req,res) => {
    let conteudo = req.params.conteudo;
    let foto = req.params.foto;
    let tempoTreino = req.params.tempoTreino;
    let feed = await servicesPI.postFeed(conteudo,foto,tempoTreino)

    res.json(feed);
    },

    postReaction: async(req,res) => {
    let idPublicacao = req.params.idPublicacao;
    let idComentario = req.params.idComentario;
    let idReacao = req.params.idReacao;
    let reation = await servicesPI.postReaction(idPublicacao,idComentario,idReacao)
    
    res.json(reation);
    },

// Metodo para consultar as variaveis 

    getLogin: async (req,res) => {
    let email = req.params.email;
    let senha = req.params.senha;
    let login = await servicesPI.getUsuario(email, senha)
    
    res.json(login);
    },
    
    getGrupo: async (req,res) => {
    let id = req.params.id;
    let grupo_id = await servicesPI.getGrupo(id)
        
    res.json(grupo_id);
    },        

    //verificar isso aqui
    getPost: async(req,res) => {
    let id = req.params.id;
    let post_id = await servicesPI.getPost(id)
    
    res.json(post_id);
    },

    getReactionFeed: async(req,res) => {
    let id = req.params.id;
    let reaction_id = await servicesPI.getReaction(id)

    res.json(reaction_id);
    },

  // Aba para deletar coisas 

    deleteUsuario: async (req,res) => {
    let id = req.params.id;
    let removed_user = await servicesPI.deleteUsuario(id)

    res.json(removed_user);
    },

    deleteGrupo: async (req,res) => {
        let id = req.params.id;
        let removed_group = await servicesPI.deleteGrupo(id)
    
        res.json(removed_group);
        },
    
    deletePost: async (req,res) => {
        let id = req.params.id;
        let removed_post = await servicesPI.deletePost(id)

        res.json(removed_post);
        },
    
    deleteReaction: async (req,res) => {
        let id = req.params.id;
        let removed_reaction = await servicesPI.deleteReaction(id)
    
        res.json(removed_reaction);
        },

    //deleteReaction: 

//     getControlar_veiculo: async(req,res) => {
//     let id = req.params.id;
//     let posX = req.params.x;
//     let posY = req.params.y;
//     let posZ = req.params.z;
//     let n1 = req.params.n1;

//     let solicitarLista = await piService.getControlar_veiculo(id);
//     let update = '';
    
//     // Selecionando o primeiro objeto da lista (se existir)
//     let solicitar = solicitarLista.length > 0 ? solicitarLista[0] : null;

//     if (id && posX && posY && posZ) {
//         update = await piService.putVeiculo1(id, n1, posX,posY, posZ);
//     } else {
//         update = 'ERRO, FALTAM INFORMAÇÕES'; 
//     }

//     res.json({
//         'bd': solicitar,
//         'updateVeiculo': update 
//     });

// },



// putControlar_veiculo: async(req,res) => {
//     let json = {error:'', result: {}};

//     let id = req.params.id;
//     let command = req.body.command;

//     if(id && command){
//         await piService.putControlar_veiculo(id, command);
//         json.result = {
//             id,
//             command
//         };
//     } else {
//         json.error = 'Faltam informações, campos não enviados'
//     }
//     res.json(json);
// }, 

// veiculo: async(req, res)=> {
//     let id =req.params.id;
//     let timeStart =req.params.timeStart;
//     let timeEnd =req.params.timeEnd; 

//     let getVeiculo = await piService.getVeiculo(id, timeStart, timeEnd)

//     res.json(getVeiculo)
// }


}
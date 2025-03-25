const { postUsuario } = require('../controllers/piController');
const { postFeed } = require('../controllers/piController');
const { getGrupo } = require('../controllers/piController');
const { deleteGrupo } = require('../controllers/piController');
const { getPost } = require('../controllers/piController');
const { getReaction } = require('../controllers/piController');
const { deleteReaction } = require('../controllers/piController');
const { postReaction } = require('../controllers/piController');
const { deletePost } = require('../controllers/piController');
const { deleteUsuario } = require('../controllers/piController');
const { getUsuario } = require('../controllers/piController');
const { postGrupo } = require('../controllers/piController');
const { getClient, deleteClient } = require('../controllers/piController');
const db = require('../db')
module.exports = {

    postUsuario:(usuario,cpf,email,senha) => {
        return new Promise((accept,denied) => {
            db.query('insert into usuario (nome, CPF, email, senha) values (?,?,?,?)',[usuario],[cpf], [email],[senha], (error,result) =>{ 
                	if(error) {denied(error); return}
                    accept(result);
            })
        })
    },

    postGrupo:(nome_grupo) => {
        return new Promise((accept,denied) => {
            db.query('insert into grupo (nome_grupo) values (?)',[nome_grupo], (error,result) =>{
                    if(error) {denied(error); return}
                    accept(result);
            })
        })
    },

    postGrupoMembro:(id_usuario,id_grupo) => {
        return new Promise((accept,denied) => {
            db.query('insert into grupo (nome_grupo) values (?)',[id_usuario],[id_grupo], (error,result) =>{
                    if(error) {denied(error); return}
                    accept(result);
            })
        })
    },

    postFeed:(conteudo,foto,tempoTreino) => {
        return new Promise((accept,denied) => {
            db.query('insert into feed (conteudo, foto, tempo_treino) values (?,?,?)',[conteudo],[foto],[tempoTreino], (error,result) =>{
                    if(error) {denied(error); return}
                    accept(result);
            })
        })
    },

    postReaction:(idPublicacao,idComentario,idReacao) => {
        return new Promise((accept,denied) => {
            db.query('insert into reacao_control (id_publi, id_coment, id_reacao) values (?,?,?)',[idPublicacao],[idComentario],[idReacao], (error,result) =>{
                    if(error) {denied(error); return}
                    accept(result);
            })
        })
    },

    getUsuario:(email, senha) => {
        return new Promise((accept,denied) => {
            db.query('select nome from usuario where email like \'%?%\' and senha = \'?\'', [email],[senha],(error,result) => {
                    if(error) {denied(error); return}
                    accept(result);
            })
        })
    },

    getGrupo:(id) => {
        return new Promise((accept,denied) => {
            db.query('select * from grupo where id = ?',[id], (error,result) => {
                    if(error) {denied(error); return}
                    accept(result);
            })
        })
    },

    getPost:() => {
        return new Promise((accept,denied) => {
            db.query('', (error,result) => {
                    if(error) {denied(error); return}
                    accept(result);
            })
        })
    },

    getReaction:() => {
        return new Promise((accept,denied) => {
            db.query('', (error,result) => {
                    if(error) {denied(error); return}
                    accept(result);
            })
        })
    },


    deleteUsuario:() => {
        return new Promise((accept,denied) => {
            db.query('', (error,result) => {
                    if(error) {denied(error); return}
                    accept(result);
            })
        })
    },

    deleteGrupo:() => {
        return new Promise((accept,denied) => {
            db.query('', (error,result) => {
                    if(error) {denied(error); return}
                    accept(result);
            })
        })
    },

    deletePost:() => {
        return new Promise((accept,denied) => {
            db.query('', (error,result) => {
                    if(error) {denied(error); return}
                    accept(result);
            })
        })
    },

    deleteReaction:() => {
        return new Promise((accept,denied) => {
            db.query('', (error,result) => {
                    if(error) {denied(error); return}
                    accept(result);
            })
        })
    },

    // getAllAGV: () => {
    //     return new Promise((accept, denied) => {

    //         db.query('SELECT * FROM Status_veiculo', (error, result) => {
    //             if(error){denied(error); return;}
    //             accept(result);
    //         });

    //     });
    // },

    // getAGV: (id) => {
    //     return new Promise((accept, denied)=>{
    //         db.query('SELECT * FROM Status_veiculo WHERE id_veiculo = ?', [id], (error, result) =>{
    //             if(error){denied(error); return;}
    //             if(result.length > 0){ accept(result[0]) } else {accept(false);}
    //         });
    //     });
    // },

    // getAllClient: () => {
    //     return new Promise((accept, denied) => {

    //         db.query('SELECT * FROM cliente', (error, result) => {
    //             if(error){denied(error); return;}
    //             accept(result);
    //         });

    //     });

    // },

    // getClient: (id) => {
    //     return new Promise((accept, denied)=>{
    //         db.query('SELECT * FROM cliente WHERE id_cliente = ?', [id], (error, result) =>{
    //             if(error){denied(error); return;}
    //             if(result.length > 0){ accept(result[0]) } else {accept(false);}
    //         });
    //     });
    // },

    // postClient: (clientName, clientPass) => {
    //     return new Promise((accept, denied)=>{
    //         db.query('INSERT INTO cliente(nome_cliente, senha_cliente) VALUES(?, ?)',[clientName, clientPass], (error, result) => {
    //             if(error){denied(error); return;}
    //             accept(result.insertId);
    //         });
    //     });
    // },

    // putClient: (clientID, clientName, clientPass) => {
    //     return new Promise((accept, denied)=>{
    //         db.query('UPDATE cliente SET nome_cliente = ?, senha_cliente = ? WHERE id_cliente = ? ',[clientName, clientPass, clientID], (error, result) => {
    //             if(error){denied(error); return;}
    //             accept(result);
    //         });
    //     });
    // },

    // deleteClient: (id) => {
    //     return new Promise((accept, denied) => {

    //         db.query('DELETE FROM cliente WHERE id_cliente = ?', [id], (error, result) => {
    //             if(error){denied(error); return;}
    //             accept(result);
    //         });

    //     });

    // },

    // getSolicitar: (id) => {
    //     return new Promise((accept, denied) => {
    //         db.query('SELECT comando FROM controle_Site WHERE id_veiculo = ?', id, (error, result) => {
    //             if(error){denied(error); return;}
    //             accept(result);
    //         });
    //     })

    // },

    // putSolicitar: (id, command) => {
    //     return new Promise((accept, denied)=>{
    //         db.query('UPDATE controle_Site SET comando = ? WHERE id_veiculo = ? ',[command, id], (error, result) => {
    //             if(error){denied(error); return;}
    //             accept(result);
    //         });
    //     });
    // },
    // getControlar_veiculo: (id) => {
    //     return new Promise((accept, denied) => {
    //         db.query('SELECT comando FROM Controle_veiculo WHERE id = ?', id, (error, result) => {
    //             if(error){denied(error); return;}
    //             accept(result);
    //         });
    //     })

    // },

    // putControlar_veiculo: (id, command) => {
    //     return new Promise((accept, denied)=>{
    //         db.query('UPDATE Controle_veiculo SET comando = ? WHERE id = ? ',[command, id], (error, result) => {
    //             if(error){denied(error); return;}
    //             accept(result);
    //         });
    //     });
    // },

    // putVeiculo1: (id, n1, posX, posY, posZ) => {
    //     return new Promise((accept, denied) => {
    //         db.query('insert into Veiculo1(idveiculo, comandon1, posicaoY, posicaoX, posicaoZ) VALUES (?,?,?,?,?)', [id, n1, posX, posY, posZ], (error, result) =>{
    //             if(error){denied(error); return;}
    //             accept(result);
    //         });
    //     });

    // }, 

    // getVeiculo: (id, timeStart, timeEnd) => {

    //     return new Promise((accept, denied)=> {

    //         db.query("select  * from Veiculo1 where IDveiculo = ? and data_comando between ? and ? ",[id, timeStart, timeEnd],(error,result)=> {
                

    //             if (error) {denied(error);return}
    //             accept(result);
    //         });            
    //     });
    // },
    
    // setTimeZone: () => {
    //     return new Promise((accept, denied) =>  {
    //         db.query("set time_zone = '-03:00';",[],(error, result) => {
    //             if(error){denied(error);return}
    //             accept(result);
    //         });
    //     });
    // },

    // setCurDate: () => {
    //     return new Promise((accept, denied) =>  {
    //         db.query("CURDATE()",[],(error, result)=>{
    //             if(error){denied(error);return}
    //             accept(result);                
    //         });
    //     });
    // },
    // setCurTime: () => {
    //     return new Promise((accept, denied) =>  {
    //         db.query("CURTIME()",[],(error, result)=>{
    //             if(error){denied(error);return}
    //             accept(result);                
    //         });
    //     });
    // }
};
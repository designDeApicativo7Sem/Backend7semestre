const { json } = require('body-parser');
const servicesPI = require('../services/servicesPI');


module.exports = {    
    postUsuario: async(req,res) => {
    let usuario = req.params.usuario;
    let cpf = req.params.cpf;
    let email = req.params.email;
    let senha = req.params.senha;
    let user = await servicesPI.postUsuario(usuario,cpf,email,senha)

    res.json(user);
    }

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
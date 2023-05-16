const express = require('express');

const usuarioModel = require('../model/usuarioModel');

const router = express.Router();

router.post('/usuario/inserir', (req,res)=>{

    let nome_usuario = req.body.nome_usuario;
    let username_usuario = req.body.username_usuario;
    let email_usuario = req.body.email_usuario;
    let senha_usuario = req.body.senha_usuario;
    
    usuarioModel.create(
        {nome_usuario, username_usuario, email_usuario, senha_usuario}
    ).then(
        ()=>{
           return res.status(201).json({
            errorStatus:false,
            mensageStatus:'USUARIO INSERIDO COM SUCESSO'
           });
        }   
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

router.get('/usuario/selecionar', (req,res)=>{
    
    usuarioModel.findAll()
    .then(
        (usuario)=>{
            //console.log(categorias);
            res.json(usuario);
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

});

router.put('/usuario/alterar', (req,res)=>{

    let id = req.body.id;
    let nome_usuario = req.body.nome_usuario;
    let username_usuario = req.body.username_usuario;
    let email_usuario = req.body.email_usuario;
    let senha_usuario = req.body.senha_usuario

    usuarioModel.update(
        {nome_usuario, username_usuario, email_usuario, senha_usuario},
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'USUARIO ALTERADO COM SUCESSO'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

});

router.delete('/usuario/deletar/:id', (req,res)=>{
    
    let id = req.params.id;
    console.log('ID: ' + id);

    usuarioModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'USUARIO EXCLUIDO COM SUCESSO'
               });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

module.exports = router;
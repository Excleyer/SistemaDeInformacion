const express = require('express');
const router = express.Router();

const midelwareVerifyUser = require('../midderware/veryfyAdmin.js')

//importar controlador
const {index,login,register,registerPost,getPacientes,representanteGet,editarNino,verPerfil,update,registerRepresentanteGet,registerRepresentantePost,updateRepresentante,updateRepresentantePost,loginPost,logout,filtro} = require('../controllers/controllers.js');

router.get('/',login);//mostrar login
router.get('/home',midelwareVerifyUser,index);//plantilla de inicio
router.get('/register',midelwareVerifyUser,register);//mostrar plantilla de registro de paciente
router.get('/getPacientes',midelwareVerifyUser ,getPacientes);//listar pacientes
router.get('/cerrarSession',logout);

router.get('/editarNino/:id',midelwareVerifyUser ,editarNino);//editar paciente
router.get('/verPerfil/:id',midelwareVerifyUser ,verPerfil);//ver plantilla perfil
router.get('/representante',midelwareVerifyUser ,representanteGet);//listar representantes
router.get('/registerRepresentanteGet',midelwareVerifyUser ,registerRepresentanteGet);//mostrar plantilla de registro de representantes
router.get('/updateRepresentante/:id',midelwareVerifyUser ,updateRepresentante);//mostrar plantilla de actualizar representantes

//login pos
router.post('/',loginPost);//evalua logueado


router.post('/filtro',filtro)//buscar pacuiente

//metodos post
router.post('/register',midelwareVerifyUser ,registerPost);//registrar paciente
router.post('/update/:id',midelwareVerifyUser ,update);//actualizar paciente
//registerRepresentante
router.post('/registerRepresentantePost',midelwareVerifyUser ,registerRepresentantePost);//registrar representante
router.post('/updateRepresentantePost/:id',midelwareVerifyUser,updateRepresentantePost)//actualizar representante


module.exports=router;
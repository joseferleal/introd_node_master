const {Router} = require('express');
const UsuarioController = require('../controllers/usuarioController');



class UsuarioRouter{
    constructor(){
        this.router = Router();
        this.config(); //Con el numeral se convierte en privado
    }
    config(){

        ///Crear objeto usuariocontroller
        const objUsuarioC= new UsuarioController();

        //Crear rutas
        this.router.get('/usuarios', objUsuarioC.obtenerTodosUsuarios);
        this.router.get('/usuarios/:id', objUsuarioC.obtenerUsuario);
        this.router.post('/usuarios', objUsuarioC.crearUsuario);
        this.router.put('/usuarios', objUsuarioC.actualizarUsuario);
        this.router.delete('/usuarios', objUsuarioC.eliminarUsuario);
        
    }


    

/*
tema1=*POO*
tema2=*Arrays y objetos*
tema3=*Array methods*
tema4=*Iteradores*
tema5=*Eventos*
tema6=*Programacion asincrona*
tema7=*Arrow functions*


*/

}

module.exports = UsuarioRouter;
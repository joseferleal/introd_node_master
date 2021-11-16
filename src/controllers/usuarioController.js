const usuarios = [
    {id: 1, nombre: 'Juan', apellido: 'Perez'}, 
    {id: 2, nombre: 'Marcela', apellido: 'Blanco'},
    {id: 3, nombre: 'Julián', apellido: 'Quintana'},
    {id: 4, nombre: 'René', apellido: 'Higuita'}
]


class UsuarioController{
    obtenerTodosUsuarios(req, res){
        res.status(200).json(usuarios);

    }

    obtenerUsuario(req, res){
        let id = req.params.id;
        let arrayUsu = usuarios.filter( element=> (element.id == id) );
        res.status(200).json(arrayUsu);
    }

    crearUsuario(req, res){
    let {nombre, apellido}= req.body;
    //Cuando una función flecha recibe un parámetro, se pueden omitir los paréntesis y corchetes 
    let ids=usuarios.map(element=>element.id);
    let id =Math.max(...ids)+1;
    usuarios.push({id, nombre, apellido});
   /* console.log(ids);
    let max= Math.max(...ids); //Librería math de Javascript
    
    */
    console.log(id);
    console.table({nombre, apellido});
    res.status(201).json({mensaje:"Usuario creado"});
}

actualizarUsuario(req, res){
    let{id, nombre, apellido}=req.body;
    usuarios.map(element=>{
        if(element.id==id){
            element.nombre=nombre;
            element.apellido=apellido;
        }
    })
    res.status(200).send();
}

eliminarUsuario(req, res){
let {id} =req.body;
//let usuario=usuarios.filter(element=>element.id != id);
let index=usuarios.map(element=>element.id).indexOf(id);
console.log(index);
usuarios.splice(index, 1);
res.status(200).json({indice:index});
}
}

module.exports=UsuarioController;
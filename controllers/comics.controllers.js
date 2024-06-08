const {request , response} = require("express");

const { comics } = require("../comics");

const getComics = ( req, res) =>{
        return res.json({
           ok: true,
            statuscode:200,
            comics
        });
    }

const getComicsById = ( req = request, res = response) =>{
    
    let id = parseInt(req.params.id);

    let comicsABuscar = "";

    comicsABuscar = comics.find(( comics )=>{
        return comics.id === id;
    })

    if(comicsABuscar){
        return res.json({
            ok:true,
            statuscode: 200,
            comicsABuscar
        });
    }else{
        return res.json({
            ok:true,
            statuscode:404,
            comicsABuscar,
            msg: "No hay comics con la ID"
        })
    }

}


module.exports = {
    getComics, getComicsById
}
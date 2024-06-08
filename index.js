
const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2006;
//-------------------------------------------

const { getComics, getComicsById } = require("./controllers/comics.controllers")
app.use(cors());

app.get("/" , getComics )

app.get("/:id" , getComicsById)

//-------------------------------------------

app.listen( puerto, () => {

    console.log(`Servidor arriba ok en el puerto ${puerto}`);
});


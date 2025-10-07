import {Router} from "express"

const router = Router()

var artistas = ["Johann Sebastian Bach", "Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Leonardo da Vinci", "Antonio Vivaldi"]

router.get("/", (req, res)=>{
    res.render("home", {
        artistas,
        title: "Inicio - Artistas Clásicos",
        page: "home"
    })
})

router.get("/info/:c/:texto", (req, res)=>{
    var c = req.params.c
    var texto = req.params.texto
    console.log(c)
    res.render("info", {
        c, 
        texto,
        title: "Información",
        page: "info"
    })
})

// NUEVA RUTA PARA CONTACTO
router.get("/contacto", (req, res)=>{
    res.render("contacto", {
        title: "Contáctanos",
        page: "contacto"
    })
})

export default router
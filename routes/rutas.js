import {Router} from "express" //desestructuracion de {Routes}

const router = Router()

var artistas = ["Johann Sebastian Bach", "Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Leonardo da Vinci", "Antonio Vivaldi"]
router.get("/", (req, res)=>{
    res.render("home", {artistas})
})


router.get("/info/:c/:texto", (req, res)=>{
    var c = req.params.c
    var texto = req.params.texto
    console.log(c)
    res.render("info",{c, texto})
})

export default router
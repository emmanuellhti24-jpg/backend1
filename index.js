import express from "express" 
import rutas from "./routes/rutas.js"

const app = express()
app.set("view engine", "ejs")
app.use("/", rutas)
/*
app.get("/", function(req, res){
    res.send("Hola mundo")
})

app.get("/contactanos", function(req, res){
    res.send("Contactano en nuestro correo: node@gmail")
})
*/
const PORT = process.env.PORT || 3000
app.listen(PORT, function(){
    console.log("http://localhost:"+PORT)
})
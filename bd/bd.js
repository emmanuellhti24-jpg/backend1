import mongoose from "mongoose";

async function conectarBD() {
  try {
    // Conexión correcta a MongoDB local
    const respuestaMongo = await mongoose.connect("mongodb+srv://emmanuellhti24:1409@cluster0.tzb9yrm.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0");

    console.log(" Conexión exitosa con MongoDB");
  } catch (err) {
    console.error(" Error al conectar con MongoDB:", err);
  }
}

// Llamar a la función para iniciar la conexión
conectarBD();

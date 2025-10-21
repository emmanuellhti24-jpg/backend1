import mongoose from "mongoose";

async function conectarBD() {
  try {
    // Conexión correcta a MongoDB local
    const respuestaMongo = await mongoose.connect("mongodb://localhost:27017/tu_basedatos");

    console.log(" Conexión exitosa con MongoDB");
  } catch (err) {
    console.error(" Error al conectar con MongoDB:", err);
  }
}

// Llamar a la función para iniciar la conexión
conectarBD();

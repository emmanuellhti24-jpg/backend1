import contacto from "../models/contacto.js"

export async function nuevoContaacto(){
	const contacto = new contacto({nombre,edad})
	const respuestaMongo = await contacto.save()
	return respuestaMongo;
}
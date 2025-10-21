import mongoose from "mongoose"

const contactoSchema = new mongoose.Schema({
	nombre:{
		type:String,
		required:true,
		trim:true,
		unique:true
	},
	edad:{
		type:Number,
		required:true,
		trim: true,
		unique:false 
	}
})

export default mongoose.model('Comtacto', contactoSchema)
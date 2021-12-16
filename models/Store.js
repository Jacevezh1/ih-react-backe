// ./server/models/Store.js

// 1. IMPORTACIONES
const mongoose = require("mongoose")



// 2. SCHEMA
const storeSchema = mongoose.Schema({
	nombre: {
		type: String,
		required: true
	},
	direccion: {
		type: String
	},
	descripcion: {
		type: String
	}, 
	imagen: {
		type: String
	}
})


// 3. MODELOS
const Store = mongoose.model("Store", storeSchema)


// 4. EXPORTACIÓN
module.exports = Store
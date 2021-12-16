// ./server/routes/guitars.js

// 1. IMPORTACIONES
const express 		= require("express")
const router		= express.Router()

const storeController	= require("./../controllers/storeController")




// 2. RUTEO (ROUTER)

// CREAR GUITARRA
router.post("/create", storeController.create)

// LEER GUITARRAS
router.get("/readall", storeController.readAll)

// LEER UNA GUITARRA
router.get("/readone/:id", storeController.readOne)

// ACTUALIZAR UNA GUITARRA
router.put("/edit/:id", storeController.edit)

// BORRAR UNA GUITARRA
router.delete("/delete/:id", storeController.delete)



// 3. EXPORTACIONES
module.exports = router

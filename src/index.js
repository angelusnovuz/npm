// Llamamos a express
const express = require("express")
// Servidor
const app = express()
// Asignamos el puerto
app.set("port", 4000);

app.listen(app.get("port"), () => {
    console.log("Servidor en el puerto", app.get("port"));
})
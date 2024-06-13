const express = require("express");
const connection = require("../config/db");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

const corsOption = {
    origin: 'https://proyectoherbario-production.up.railway.app',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}
app.use(cors(corsOption));
app.use(express.json());

app.get("/", (req, res) => {
    res.send({msg:"Hola mundo!"});
});

// FUNCION PARA INGRESAR ADMINISTRADORES (no testeado)
app.post("/create",async (req,res, next)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    try {
        const [result] = await connection.query('INSERT INTO administradores(nombre, correo_electronico, contrasena) VALUES(?,?,?)',[name,email,password]);
        res.send("Administrador registrado con éxito!!");
    }catch(err) {
        console.log(err);
        res.status(500).send("Error al registrar administrador");
    }

});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

module.exports = app;
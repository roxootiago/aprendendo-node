/* criando um servidor */
const express = require("express");

const app = express();

const door = 3000 /* Criando a constante fica mais fácil para a manutenção caso dê algum erro futuramente na porta */

app.get ("/", (req, res) => {
    res.sendFile(
      __dirname +`/src/index.html`
    );
})

app.get("/json", (req,res) => {
    res.json({title: "Welcome",online: true})
})

app.listen(door, () => {
  console.log("Servidor encontrado!");
});

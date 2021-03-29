//import express from "express";
import express, { Request, Response } from "express";
const app = express();
console.clear();

//Funcionalidades
//Métodos/Verbos HTTP -> POST e GET ...

app.get("/", (request: Request, response: Response) => {

  response.send("Hello World! abc");

});



app.listen(3000, () => {

  console.log("O servidor está rodando...");

});






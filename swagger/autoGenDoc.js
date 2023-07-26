 const mangooseToSwagger = require('mongoose-to-swagger');
 const EsquemaTarefa = require('../src/models/tarefa.js');
 const EsquemaUsuario = require('../src/models/usuario.js');
 const swaggerAutogen = require('swagger-autogen')({
    openapi: '3.0.0',
    language: 'pt-BR'
 });

 const outputFile = './swagger_output.json';
 const endpointFiles = ['../index', '../src/routes.js'];


 let doc = {
   info:{
      version: '1.0.0',
      title: "API do BoardTasks",
      description: "Documentação da API do BoardTasks."
   },
   servers: [
      {
         url: "http://localhost:4000/",
         description: "Servidor localhost"
      },
      {
         url: "http://localhost:4000/",
         description: "Servidor de produção"
      }
   ],
      comsumes: ['aplication/json'],
      produces: ['aplication/json'],
 }

 swaggerAutogen(outputFile, endpointFiles, doc).then(() => {
   console.log('Documentação do Swagger gerada encontra-se no arquivo em: ' + outputFile);
   if (process.env.NODE_ENV !== 'production'){
      require("../index.js");
   }
 })
 const mangooseToSwagger = require('mongoose-to-swagger');
 const EsquemaTarefa = require('../src/models/tarefa.js');
 const EsquemaUsuario = require('../src/models/usuario.js');
 const swaggerAutogen = require('swagger-autogen')({
    openapi: '3.0.0',
    language: 'pt-BR'
 });

 const outputFile = './swagger_output.json';
 const endpointFiles = ['../index', '../src/routes.js'];
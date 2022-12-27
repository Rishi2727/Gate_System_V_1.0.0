const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const host = '0.0.0.0'
const port = 54321

app.set ('Host', host)
app.set ('Port', port)



//https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Wise Neosco Gate Server API',
            description: 'Wise Neosco Gate Server API Information',
            contact: {
                name: "Wise Neosco Team"
            },
            servers: ["http://localhost:3000"]
        }
    },
    // ['.routes/*.js']
    apis: ["server.js"]
}



const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * 
 * @swagger
 * /customer:
 *  get:
 *      description: Use to request all customers
 *      responses:
 *          '200':
 *              description: A successful response
 */ 

app.get('/customer', (req, res) => {
    console.log("request received");
    res.status(200).send("Hello World");
});


// server.listen(port, host, () => {
//     console.log(`Server running at http://${host}:${port}/`)
// })
// return

module.exports={
    app,
    server
}
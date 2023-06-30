import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Servicio de biblioteca",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:4000/",
      },
    ],
  },
  apis: ["src/router/*.js"]
  
};

const swaggerObject = swaggerJSDoc(options);

export const swaggerDocs = (app, port) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerObject));
  console.log(`http://localhost:${port}/api/docs`);
};

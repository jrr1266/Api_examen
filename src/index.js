import app from "./app.js";
import { sequelize } from './DB.js';
import './models/lector.models.js';
import './models/prestamo.models.js'
import './models/libro.models.js'
async function main() { 
   try {
      await sequelize.sync({force:false});
      app.listen(app.get("port"), () => {
        console.log(`http://localhost:${app.get("port")}`)
      });
     
   } catch (error) {
     console.error({ message: error});
   }
}
main();
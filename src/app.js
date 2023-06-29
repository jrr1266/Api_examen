import express from "express";
import morgan from "morgan";
import config from "./config.js";
import cors from "cors";
import libroRouter from "./router/listaLibros.routes.js";
import lectorRouter from "./router/lector.routes.js";
import prestamoRouter from "./router/prestamo.routes.js";
const app = express();

app.set("port", config.port);

app.use(morgan("dev"));

app.use(express.json());

app.use(cors());

app.use("/api", libroRouter);
app.use("/api", lectorRouter);
app.use("/api", prestamoRouter);
export default app;

import { routes } from './routes'
import express from "express";
const app = express();
app.listen(8002)
app.use(express.json())
app.use(routes);


export default app;
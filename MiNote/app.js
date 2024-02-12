import Express from "express";
import cors from "cors";
import miDb from "./base/MiBase.js";
import apdzroutes from "./routes/miruta.js";

const app = Express();
app.use(cors());
app.use(Express.json());
app.get("/", apdzroutes);

app.listen(4000,()=>{
  console.log('conected in local')
})

app.use('/aprendices',apdzroutes)


miDb.authenticate()
  .then(() => {
    console.log("Conexión a la base de datos establecida");
  })
  .catch((err) => {
    console.error("Error al conectar con la base de datos:", err);
  });



  miDb.sync()
  .then(() => {
    console.log("Modelos sincronizados correctamente");
  })
  .catch((err) => {
    console.error("Error al sincronizar modelos:", err);
  });

import { Application } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import router from "./routes/index.routes.ts";

const app = new Application();

app.use(router.routes())
app.use(router.allowedMethods());

console.log('server runnin 3000');

await app.listen({port:3000});

//CRUD de ususarios usando Oak
//probar funcionalidad con Postman o ThunderClient
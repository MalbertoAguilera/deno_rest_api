import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import * as indexCtrl from "../controllers/index.controllers.ts";

const router = new Router();

router.get('/users', indexCtrl.getUsers);
router.post('/users', indexCtrl.createUsers);
router.get('/users/:id', indexCtrl.getUser);
router.delete('/users/:id', indexCtrl.deleteUser);

router.get('/', ({response})=>{
      response.body='hello world'
})





export default router;
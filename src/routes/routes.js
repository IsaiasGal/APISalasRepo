import { Router } from "express";
import { getsalas, actualizarsala, crearsala, getsala, eliminarsala } from "../controllers/salas.controllers.js";
import { getusuario, actualizarusuario, crearusuario, eliminarusuario, login } from "../controllers/usuario.controllers.js";
import { getagsalas, actualizaragsala, crearagsala, getagsala, eliminaragsala } from "../controllers/agendar.salas.controllers.js";



const router = Router();

router.get ('/salas', getsalas);

router.get ('/salas/:id', getsala);

router.post ('/salas', crearsala);

router.put ('/salas/:id', actualizarsala);

router.delete ('/salas/:id', eliminarsala);

router.get ('/usuario/:id', getusuario);

router.post ('/usuario', crearusuario);

router.post ('/login', login);

router.put ('/usuario/:id', actualizarusuario);

router.delete ('/usuario/:id', eliminarusuario);

router.get ('/agsalas', getagsalas);

router.get ('/agsalas/:id', getagsala);

router.post ('/agsalas', crearagsala);

router.put ('/agsalas/:id', actualizaragsala);

router.delete ('/agsalas/:id', eliminaragsala);

export default router;
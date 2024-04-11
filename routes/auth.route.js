import express from 'express'
import { login, register } from '../controllers/auth.controller.js'
import {body} from 'express-validator'
import { validationResultExpress } from '../middleware/validationResults.js'
const router = express.Router()

router.post('/login',[body('email',"Formato email invalido").trim().isEmail().normalizeEmail(),
body('password',"Minimo 6 caracteres").trim().isLength({min:6})],
validationResultExpress,
login)

router.post('/register',[

body('email',"Formato email invalido").trim().isEmail().normalizeEmail(),
body('password',"Minimo 6 caracteres").trim().isLength({min:6}),
body('password',"Formato de contraseña incorrecto").custom((value,{req})=>{

if(value !== req.body.repassword){
    throw new Error('Las contraseñas no coinciden')
}
return value


})


], register)

export default router
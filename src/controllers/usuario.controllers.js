import {getConnection} from '../database/connection.js'
import bcryptjs from 'bcryptjs'


export const getusuario = async (req, res) => {
    const pool= await getConnection()
    const result= await pool.request().query ('SELECT * FROM usuario WHERE idUsuario = 1')
    res.json(result.recordset)
}

export const login = async (req, res) => {
    try {
        
        const pool = await getConnection()
        const result = await pool.request()
            .input('Correo', req.body.correo)
            .output('Contrasena', '')
            .output('OcurrioUnError', 0)
            .output('MensajeDeRespuesta', '')
            .output('idUsuario', 0)
            .execute(`spLogin`);

        const contrasena = req.body.contrasena;
        var response = {
            OcurrioUnError: true,
            MensajeDeRespuesta: 'Ocurrió un error',
            idUsuario: +0
        };

        if (result.output.OcurrioUnError === 1) {
            response = {
                OcurrioUnError: result.output.OcurrioUnError === 1,
                MensajeDeRespuesta: result.output.MensajeDeRespuesta,
                idUsuario: +0
            };
        } else {
            const IsValido = await bcryptjs.compare(contrasena, result.output.Contrasena);

            if (IsValido) {
                response = {
                    OcurrioUnError: result.output.OcurrioUnError === 1,
                    MensajeDeRespuesta: result.output.MensajeDeRespuesta,
                    idUsuario: +result.output.idUsuario
                };
            } else {
                response = {
                    OcurrioUnError: result.output.OcurrioUnError === 1,
                    MensajeDeRespuesta: 'Contraseña incorrecta',
                    idUsuario: 0
                };
            }
            
        }
        

        

        res.json(response);
    } catch (error) {
        res.status(500).json(error);
    }

}

export const crearusuario = async (req, res) => {
    console.log(req.body);

    // const pool = await getConnection();
    // const result = await pool
    // .request()
    // .input("nombreusuario",sql.varChar, req.body.nombreusuario)
    // .input("contraseña",sql.varchar, req.body.contraseña)
}

export const actualizarusuario =  (req, res) =>{
    res.send("actualizar") 
}

export const eliminarusuario =  (req, res) =>{
    res.send("eliminar") 
}
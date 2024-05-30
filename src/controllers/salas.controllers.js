import {getConnection} from '../database/connection.js'

export const getsalas = async (req, res) => {
    const pool= await getConnection()
    const result= await pool.request().query ('SELECT * FROM sala')
    res.json(result.recordset)
}

export const getsala =  (req, res)  => {
    res.send ("una")
}

export const crearsala = async (req, res) => {
    try {
        
        const pool = await getConnection()
        const result = await pool.request()
            .input('NombreSala', req.body.NombreSala)
            .input('Capacidad', req.body.Capacidad)
            .input('CuentaConProyector', req.body.CuentaConProyector)
            .input('CuentaConPantalla', req.body.CuentaConPantalla)
            .input('CuentaConPizarra', req.body.CuentaConPizarra)
            .input('CuentaConBocinas', req.body.CuentaConBocinas)
            .input('CuentaConInternet', req.body.CuentaConInternet)
            .input('CuentaConMesaAperitivos', req.body.CuentaConMesaAperitivos)
            .output('OcurrioUnError', 0)
            .output('MensajeDeRespuesta', '')
            .execute(`spCrearSala`);

            const response = {
                OcurrioUnError: result.output.OcurrioUnError === 1,
                MensajeDeRespuesta: result.output.MensajeDeRespuesta
            };

        res.json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const actualizarsala =  (req, res) =>{
    res.send("actualizar") 
}

export const eliminarsala =  async (req, res) =>{
    try {
        
        const pool = await getConnection()
        const result = await pool.request()
            .input('idSala', req.body.idSala)
            .output('OcurrioUnError', 0)
            .output('MensajeDeRespuesta', '')
            .execute(`spCrearSala`);

            const response = {
                OcurrioUnError: result.output.OcurrioUnError === 1,
                MensajeDeRespuesta: result.output.MensajeDeRespuesta
            };

        res.json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}
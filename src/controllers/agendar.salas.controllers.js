import {getConnection} from '../database/connection.js'

export const getagsalas = async (req, res) => {
    const pool= await getConnection()
    const result= await pool.request().query ('SELECT * FROM reservacionsala')
    res.json(result.recordset)
}

export const getagsala =  (req, res)  => {
    res.send ("una")
}

export const crearagsala = (req, res) => {
    res.send ("nueva")
}

export const actualizaragsala =  (req, res) =>{
    res.send("actualizar") 
}

export const eliminaragsala =  (req, res) =>{
    res.send("eliminar") 
}
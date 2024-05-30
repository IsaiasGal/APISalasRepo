import sql from 'mssql'

const dbSettings = {
     user: "sa",
     password: "qwerty1234",
     server: "192.168.1.5\\MSSQLLOCALDB",
     database: "AdministracionSalas",
     options:{
        encrypt: false,
        trustServerCertificate: true,
     }
};

export const getConnection = async ()=> {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    }catch(error){
        console.error(error);
    }
};


import pool from '../database.js';
import circularJSON from 'json-stringify-safe';

const mainRoute = (req, res) => {

    return res.status(200).send({
        title: "Main Route",
        status: 200
    });
}

const createTarjeta = async (req, res) => {

    try {

        let { nombre, nroTarjeta, telefono, direccion, codigo_postal, cedula, fecha_vencimiento } = req.body;

        if(!nombre || !nroTarjeta || !telefono || !direccion || !codigo_postal || !cedula || !fecha_vencimiento){
            return res.status(404).send({
                title: "Error",
                desc: "Los campos del formulario no pueden estar vacíos",
                status: 404
            });
        }

        const [data] = await pool.query(`SELECT * FROM tarjeta_usuarios`);

        const validTarjeta = data.find((el) => el.nroTarjeta === nroTarjeta || el.cedula === cedula);
        
        if(validTarjeta){
            return res.status(400).send({
                titile: "Error",
                desc: "La tarjeta o la cédula que intenta agregar ya existen",
                status: 400
            });
        }

        let sql = "INSERT INTO tarjeta_usuarios SET ?";

        const [result] = await pool.query(sql, {nombre, nroTarjeta, telefono, direccion, codigo_postal, cedula, fecha_vencimiento});

        if(result){
            return res.status(200).send(circularJSON({
                title: "Success",
                status: 200,
                result
            }, null, 2));
        }

    } catch(error) {
        return res.status(404).send({
            title: "Error",
            error,
            status: 404
        });
    }
}

const getAllTarjetas = async (req, res) => {

    try {
        
        const [data] = await pool.query("SELECT * FROM tarjeta_usuarios");

        if(data){
            return res.status(200).send(circularJSON({
                title: "Success",
                status: 200,
                data
            }, null, 2));
        }

    } catch (error) {
        return res.status(404).send({
            title: "Error",
            error,
            status: 404
        });
    }
}


export const queryDatabase = {
    mainRoute,
    createTarjeta,
    getAllTarjetas
}
export class Tarjeta {
    tarjeta_id?: number = 0;
    nombre: string = "";
    nroTarjeta: string = "";
    telefono: string = "";
    direccion: string = "";
    codigo_postal: string = "";
    cedula: string = "";
    fecha_vencimiento: string = "";

    constructor(nombre: string, nroTarjeta: string, telefono: string, direccion: string, codigo_postal: string, cedula: string,  fecha_vencimiento: string){
        this.nombre = nombre;
        this.nroTarjeta = nroTarjeta;
        this.telefono = telefono;
        this.direccion = direccion;
        this.codigo_postal = codigo_postal;
        this.cedula = cedula;
        this.fecha_vencimiento = fecha_vencimiento;
    }
}

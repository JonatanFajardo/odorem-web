export interface Usuarios {
    usuario_Id: number;
    usuario: string;
    nombre: string;
    apellido: string;
    correo: string;
    contrasena: string;
    rol_Id: number | null;
}
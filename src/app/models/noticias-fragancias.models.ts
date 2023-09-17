export interface NoticiasFraganciasDto {
    idNoticiasFragancias: number;
    titulo: string;
    contenido: string;
    fechaPublicacion: string | null;
    autor: string;
    fuente: string;
    imagenUrl: string;
    enlace: string;
    etiquetas: string;
}
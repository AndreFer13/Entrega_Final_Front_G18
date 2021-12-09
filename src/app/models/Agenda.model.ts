export interface Agenda {
    id:             string;
    usuario:        Usuario;
    fecha:          string;
    nombre:         string;
      
}

export interface Stecnico {
    id?:     string;
    nombre: string;
}

export interface Usuario {
    id:       string;
    nombre:   string;
    correo:   string;
    username: string;
    password?: string;
    hash?:     string;
}
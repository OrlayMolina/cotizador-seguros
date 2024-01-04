export const MARCAS = [
    { id: 1, nombre: 'Europeo' },
    { id: 2, nombre: 'Asiatico' },
    { id: 3, nombre: 'Americano' },
];

const YEARMAX = new Date().getFullYear();

export const YEARS = Array.from(new Array(10), (valor, index) => YEARMAX - index);

export const PLANES = [
    { id: 1,  nombre: "Básico"},
    { id: 2,  nombre: "Completo"},
];
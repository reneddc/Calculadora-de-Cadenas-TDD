import {sumaCadenas, mayor1000} from './sumaCadena'

describe("SUMA DE CADENAS", () => {

    it("1. Si ingreso la cadena '' debería devolver el valor de 0", () => {
        expect(sumaCadenas('')).toEqual(0);
    });

    it("2. Si ingreso la cadena '2' debería devolver el valor de 2", () => {
        expect(sumaCadenas('2')).toEqual(2);
    });

    it("3. Si ingreso la cadena '1001' debería devolver el valor de 'true' (si es mayor a 1000)", () => {
        expect(mayor1000('1001')).toEqual(true);
    });

});




  
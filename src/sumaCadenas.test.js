import sumaCadenas from './sumaCadena'

describe("SUMA DE CADENAS", () => {

    it("1. Si ingreso la cadena '' debería devolver el valor de 0", () => {
        expect(sumaCadenas('')).toEqual(0);
    });

    it("2. Si ingreso la cadena '2' debería devolver el valor de 2", () => {
        expect(sumaCadenas('2')).toEqual(2);
    });

});


  
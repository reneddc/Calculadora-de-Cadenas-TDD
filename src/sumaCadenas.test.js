import SumaCadena from './sumaCadena'

describe("SUMA DE CADENAS", () => {

    const sumaCadena = new SumaCadena();

    it("1. Si ingreso la cadena '' debería devolver el valor de 0", () => {
        expect(sumaCadena.sumaCadenas('')).toEqual(0);
    });

    it("2. Si ingreso la cadena '2' debería devolver el valor de 2", () => {
        expect(sumaCadena.sumaCadenas('2')).toEqual(2);
    });

    it("3. Si ingreso la cadena '1001' debería devolver el valor de 'true' (si es mayor a 1000)", () => {
        expect(sumaCadena.mayor1000('1001')).toEqual(true);
    });

    it("4. Si ingreso la cadena '1001' debería devolver el valor de 0", () => {
        expect(sumaCadena.sumaCadenas('1001')).toEqual(0);
    });

    it("5. Si pregunto los separadores momentáneos, debería devolver el tipo de separador <,>", () => {
        expect(sumaCadena.aniadirSeparadores()).toEqual(',');
    });

    it("6. Si ingreso la cadena '4,2' debería devolver el 4", () => {
        expect(sumaCadena.sumaCadenas('4,2')).toEqual(4);
    });

});




  
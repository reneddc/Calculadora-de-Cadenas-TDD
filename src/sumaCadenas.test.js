import SumaCadena from './sumaCadena'

describe("SUMA DE CADENAS", () => {

    const sumaCadena = new SumaCadena();

    it("1. Si ingreso la cadena '' debería devolver el valor de 0", () => {
        expect(sumaCadena.sumaCadenas('')).toEqual(0);
    });

    it("2. Si ingreso la cadena '2' debería devolver el valor de 2", () => {
        expect(sumaCadena.sumaCadenas('2')).toEqual([2]);
    });

    it("3. Si ingreso la cadena '1001' debería devolver el valor de 'true' (si es mayor a 1000)", () => {
        expect(sumaCadena.mayor1000('1001')).toEqual(true);
    });

    it("4. Si ingreso la cadena '1001' debería devolver el valor de 0", () => {
        expect(sumaCadena.sumaCadenas('1001')).toEqual([0]);
    });

    it("5. Si pregunto los separadores momentáneos, debería devolver el tipo de separador <,>", () => {
        expect(sumaCadena.mostrarSeparador(0)).toEqual(',');
    });

    it("6. Si ingreso la cadena '5,8' debería devolver el 5", () => {
        sumaCadena.capturarPrimerNumero('5,8')
        expect(sumaCadena.listaNumeros[0]).toEqual(5);
    });

    it("7. Si ingreso la cadena '4,2' debería devolver el 4 y el 2", () => {
        expect(sumaCadena.sumaCadenas('4,2')).toEqual([4,2].sort());
    });

    it("8. Si ingreso la cadena '0,2,5' debería devolver el 0, 2 y 5 (validar los separadores)", () => {
        expect(sumaCadena.sumaCadenas('0,2,5')).toEqual([0,2,5]);
    });

    it("9. Si pregunto los separadores momentáneos, debería devolver el tipo de separador <,> y <->", () => {
        expect(sumaCadena.mostrarSeparador(1)).toEqual('-');
    });

    it("10. Si ingreso la cadena '0-2-3...' debería devolver el 0, 2 y 3", () => {
        expect(sumaCadena.sumaCadenas('0-2-3-4-10-15-20')).toEqual([0,2,3,4,10,15,20].sort());
    });

    it("10. Si ingreso la cadena '0-2,3...' debería devolver el 0, 2 y 3", () => {
        expect(sumaCadena.sumaCadenas('0-2,3-4,10,15-20')).toEqual([0,2,3,4,10,15,20].sort());
    });

    it("11. Si ingreso la cadena '//[;] 6;7;4' debería devolver el tipo de separador ';'", () => {
        expect(sumaCadena.obtenerNuevoSeparador('//[;] 6;7;4')).toEqual(';');
    });

    it("12. Si ingreso la cadena '//[;] 6;7;4' debería devolver el tipo de separador <;> <,> <->", () => {
        let nuevoSeparador = sumaCadena.obtenerNuevoSeparador('//[;] 6;7;4');
        expect(sumaCadena.agregarSeparador(nuevoSeparador)).toEqual([',','-',';']);
    });

    it("13. Si ingreso la cadena '//[;] 6;7-4' debería devolver el 6, 7 y 4", () => {
        expect(sumaCadena.sumaCadenas('//[;] 6;7,4;8;9;0-1-3')).toEqual([6,7,4,8,9,0,1,3].sort());
    });


    it("14. Si ingreso la cadena '//[+++] 6+++7+++4' debería devolver el tipo de separador '+++'", () => {
        expect(sumaCadena.obtenerNuevoSeparador('//[+++] 6+++7+++4')).toEqual('+++');
    });

    it("15. Si ingreso la cadena '//[+++] 6+++7+++4' debería devolver el tipo de separador '+++'", () => {
        let nuevoSeparador = sumaCadena.obtenerNuevoSeparador('//[++-] 6+++7+++4');
        expect(sumaCadena.agregarSeparador(nuevoSeparador)).toEqual([',','-',';','++-']);
    });

    it("16. Si ingreso la cadena '//[+++] 6+++7,4;8;9;0+++1-3' debería devolver el 6,7,4,8,9,0,1,3", () => {
        expect(sumaCadena.sumaCadenas('//[++-] 6++-7,4+8;9;0++-1-3')).toEqual([6,7,4,9,0,1,3].sort());
    });

    it("17. Si ingreso la cadena '//[++-][.] 6+++7;4' debería devolver el tipo de separador ';'", () => {
        expect(sumaCadena.obtenerSegundoNuevoSeparador('//[++-][x] 6++-7x4')).toEqual('x');
    });
});




  
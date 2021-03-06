import SumaCadena from './sumaCadena'

describe("SUMA DE CADENAS", () => {

    const sumarCadena = new SumaCadena();

    it("1. Si ingreso la cadena '' debería devolver el valor de 0", () => {
        expect(sumarCadena.obtenerListaNumeros('')).toEqual(0);
    });

    it("2. Si ingreso la cadena '2' debería devolver el valor de 2", () => {
        expect(sumarCadena.obtenerListaNumeros('2')).toEqual([2]);
    });

    it("3. Si ingreso la cadena '1001' debería devolver el valor de 'true' (si es mayor a 1000)", () => {
        expect(sumarCadena.esMayor1000('1001')).toEqual(true);
    });

    it("4. Si ingreso la cadena '1001' debería devolver el valor de 0", () => {
        expect(sumarCadena.obtenerListaNumeros('1001')).toEqual([0]);
    });

    it("5. Si pregunto los separadores momentáneos, debería devolver el tipo de separador <,>", () => {
        expect(sumarCadena.mostrarSeparador(0)).toEqual(',');
    });

    it("6. Si ingreso la cadena '5,8' debería devolver el 5", () => {
        sumarCadena.capturarPrimerNumero('5,8')
        expect(sumarCadena.listaNumeros[0]).toEqual(5);
    });

    it("7. Si ingreso la cadena '4,2' debería devolver el 4 y el 2", () => {
        expect(sumarCadena.obtenerListaNumeros('4,2')).toEqual([4,2].sort());
    });

    it("8. Si ingreso la cadena '0,2,5' debería devolver el 0, 2 y 5 (validar los separadores)", () => {
        expect(sumarCadena.obtenerListaNumeros('0,2,5')).toEqual([0,2,5]);
    });

    it("9. Si pregunto los separadores momentáneos, debería devolver el tipo de separador <,> y <->", () => {
        expect(sumarCadena.mostrarSeparador(1)).toEqual('-');
    });

    it("10. Si ingreso la cadena '0-2-3...' debería devolver el 0, 2 y 3", () => {
        expect(sumarCadena.obtenerListaNumeros('0-2-3-4-10-15-20')).toEqual([0,2,3,4,10,15,20].sort());
    });

    it("10. Si ingreso la cadena '0-2,3...' debería devolver el 0, 2 y 3", () => {
        expect(sumarCadena.obtenerListaNumeros('0-2,3-4,10,15-20')).toEqual([0,2,3,4,10,15,20].sort());
    });

    it("11. Si ingreso la cadena '//[;] 6;7;4' debería devolver el tipo de separador ';'", () => {
        expect(sumarCadena.obtenerNuevoSeparador('//[;] 6;7;4')).toEqual(';');
    });

    it("12. Si ingreso la cadena '//[;] 6;7;4' debería devolver el tipo de separador <;> <,> <->", () => {
        expect(sumarCadena.agregarSeparador('//[*] 6;7;4')).toEqual([',','-','*']);
    });

    it("13. Si ingreso la cadena '//[;] 6;7-4' debería devolver el 6, 7 y 4", () => {
        expect(sumarCadena.obtenerListaNumeros('//[;] 6;7,4;8;9;0-1-3')).toEqual([6,7,4,8,9,0,1,3].sort());
    });


    it("14. Si ingreso la cadena '//[+++] 6+++7+++4' debería devolver el tipo de separador '+++'", () => {
        expect(sumarCadena.obtenerNuevoSeparador('//[+++] 6+++7+++4')).toEqual('+++');
    });

    it("15. Si ingreso la cadena '//[+++] 6+++7-4' debería devolver el tipo de separador '++-', ',' y '-'", () => {
        expect(sumarCadena.agregarSeparador('//[++-] 6+++7+++4')).toEqual([',','-','*',';','++-']);
    });

    it("16. Si ingreso la cadena '//[+++] 6+++7,4;8;9;0+++1-3' debería devolver el 6,7,4,8,9,0,1,3", () => {
        expect(sumarCadena.obtenerListaNumeros('//[++--] 6++-7,4+8;9;0++--1-3')).toEqual([6,7,4,9,0,1,3].sort());
    });

    it("17. Si ingreso la cadena '//[++-][x] 6+++7;4' debería devolver el tipo de separador 'x'", () => {
        expect(sumarCadena.obtenerSegundoNuevoSeparador('//[++-][x] 6++-7x4')[0]).toEqual('x');
    });

    it("18. Si ingreso la cadena '//[_][x] 6+++7;4' debería devolver el tipo de separador '+++', ';', ',' y '-'", () => {
        expect(sumarCadena.agregarSeparador('//[_][*] 6_7x4')).toEqual([',','-','*',';','++-','++--','*','_']);
    });

    it("19. Si ingreso la cadena '//[+++][;] 6+++7;4' debería devolver el 6, 7 y 4", () => {
        expect(sumarCadena.obtenerListaNumeros('//[?][!] 6!7,4+8?9;0++-1?3')).toEqual([6,7,4,9,0,1,3].sort());
    });

    it("20. Si ingreso la cadena '6++-7;4' debería devolver la suma de 6+7+4 = 17 ", () => {
        expect(sumarCadena.sumarCadena('6++-7;4')).toEqual(17);
    });
});

//es muy mejorable la verdad, pero se me hizo complicado sobre todo con las funciones iniciales que algunas las tuve que borrar porque no aportaban mucho
//a la larga y a medida que seguía añadía métodos pensaba que podía haberlos añadido mucho antes, lo bueno es que funciona :v




  
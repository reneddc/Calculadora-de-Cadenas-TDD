
describe("SUMA DE CADENAS", () => {

    it("1. Si ingreso la cadena '0' debería devolver el valor de 0", () => {
        expect(sumaCadenas('0')).toEqual(0);
    });

});

function sumaCadenas(cadena){
    return parseInt(cadena);
}
  
class SumaCadena{

    constructor(){
        this.listaSeparadores = [];
        this.listaNumeros = [];
    }

    separarNumeros(cadena){
        let numero = 0;
        if(cadena.length != 0){
            cadena = cadena.match(/(\d+)/);//regular expressions
            numero = parseInt(cadena[1]);
            if(this.mayor1000(numero)){
                numero = 0;
            }
        }
        return numero;
    }

    sumaCadenas(cadena){
        return this.separarNumeros(cadena);
    }
    
    mayor1000(numero){
        return numero > 1000; 
    }

    aniadirSeparadores(){
        this.listaSeparadores.push(',');
        return this.listaSeparadores[0];
    }
}

export default SumaCadena;
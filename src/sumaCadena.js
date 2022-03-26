class SumaCadena{

    constructor(){
        this.listaSeparadores = [];
        this.listaNumeros = [];
    }

    sumaCadenas(cadena){
        if(cadena.length == 0 || this.mayor1000(cadena)){
            cadena = 0;
        }
        return parseInt(cadena);
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
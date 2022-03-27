class SumaCadena{

    constructor(){
        this.listaSeparadores = [];
        //this.listaNumeros = [];
    }

    capturarPrimerNumero(cadena){ //debí crear este método desde el punto 6 más o menos, recién en el 8 me di cuenta por el regex que apliqué, pensé que podía capturar todo de una, pero no
        let regExpFirst = /(\d+)/g;
        let primerNumero;
        primerNumero = parseInt(cadena.match(regExpFirst)[0]);
        if(this.mayor1000(primerNumero)){
            primerNumero = 0;
        }
        return primerNumero;
    }

    capturarOtrosNumero(lista, pos){
        let numero;
        numero = parseInt(lista[pos][1])
        if(this.mayor1000(numero)){
            numero = 0;
        }
        return numero;
    }

    separarNumeros(cadena){
        let numero = 0;
        let regExp = /[,]+(\d+)/g;
        let listaNumeros = [];
        let primerNumero;
        if(cadena.length != 0){
            primerNumero = this.capturarPrimerNumero(cadena);
            listaNumeros.push(primerNumero);
            let lista = [...cadena.matchAll(regExp)];
            for(var i = 0; i < lista.length; i++){
                numero = this.capturarOtrosNumero(lista, i);
                listaNumeros.push(numero);
            }
            return listaNumeros;
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
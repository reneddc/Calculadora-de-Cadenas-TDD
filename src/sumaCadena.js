class SumaCadena{

    constructor(){
        this.listaSeparadores = [];
        //this.listaNumeros = [];
    }

    separarNumeros(cadena){
        let numero = 0;
        let regExp = /(\d+)/g;
        let listaNumeros = [];
        if(cadena.length != 0){
            let lista = [...cadena.matchAll(regExp)];
            for(var i = 0; i < lista.length; i++){
                numero = parseInt(lista[i][0])
                if(this.mayor1000(numero)){
                    numero = 0;
                }
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
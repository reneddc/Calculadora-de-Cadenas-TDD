class SumaCadena{

    constructor(){
        this.listaSeparadores = [',', '-'];
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

    ejercerSeparadores(){
        let separadores = "";
        for(var i = 0; i < this.listaSeparadores.length; i++){
            separadores = separadores + this.mostrarSeparador(i); 
        }
        let regex = '['+separadores+']+(\\d+)';
        return regex;
    }

    separarNumeros(cadena){
        let numero = 0;
        let regExpCad = this.ejercerSeparadores();
        var re = new RegExp(regExpCad,"g");   
        let listaNumeros = [];
        let primerNumero;
        if(cadena.length != 0){
            primerNumero = this.capturarPrimerNumero(cadena);
            listaNumeros.push(primerNumero);
            let lista = [...cadena.matchAll(re)];
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

    agregarSeparador(separador){
        this.listaSeparadores.push(separador);
        return this.listaSeparadores;
    }

    mostrarSeparador(pos){
        return this.listaSeparadores[pos];
    }

    obtenerNuevoSeparador(cadena){
        let separador = '';
        let regExpCad = '//\\[(.)\\]';
        var re = new RegExp(regExpCad,"g"); 
        separador = [...cadena.matchAll(re)];
        return separador[0][1];
    }
}

export default SumaCadena;
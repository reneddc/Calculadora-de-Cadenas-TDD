class SumaCadena{

    constructor(){
        this.listaSeparadores = [',', '-'];
        this.listaNumeros = [];
    }

    capturarPrimerNumero(cadena){ //debí crear este método desde el punto 6 más o menos, recién en el 8 me di cuenta por el regex que apliqué, pensé que podía capturar todo de una, pero no
        let regExpFirst = /(\d+)/g;
        this.listaNumeros = [];
        let primerNumero;
        primerNumero = parseInt(cadena.match(regExpFirst)[0]);
        if(this.mayor1000(primerNumero)){
            primerNumero = 0;
        }
        this.listaNumeros.push(primerNumero);
    }

    capturarOtrosNumero(lista, pos){
        let numero;
        numero = parseInt(lista[pos][1])
        if(this.mayor1000(numero)){
            numero = 0;
        }
        return numero;
    }

    ejercerSeparadores(pos, cadena){
        let separador = `\\${this.listaSeparadores[pos]}`;
        if(this.listaSeparadores[pos].length > 1){
            separador = "";
            for(var i = 0; i < this.listaSeparadores[pos].length; i++){
                separador = separador + `\\${this.listaSeparadores[pos][i]}`;
            }
        }
        let regExpCad = `${separador}(\\d+)`;
        var re = new RegExp(regExpCad,"g");
        let lista = [...cadena.matchAll(re)];
        for(var i = 0; i < lista.length; i++){
            this.listaNumeros.push(this.capturarOtrosNumero(lista, i));
        }
        cadena = cadena.replace(re, "");//para evitar réplicas de datos
        return cadena;
    }

    separarNumeros(cadena){
        let numero = 0;
        if(cadena.length != 0){
            this.capturarPrimerNumero(cadena);
            for(var i = 0; i < this.listaSeparadores.length; i++){
                cadena = this.ejercerSeparadores(i, cadena);
            }
            return this.listaNumeros.sort();
        }
        return numero;
    }

    sumaCadenas(cadena){
        this.agregarSeparador(cadena);
        console.log(this.separarNumeros(cadena));
        return this.separarNumeros(cadena);
    }
    
    mayor1000(numero){
        return numero > 1000; 
    }

    agregarSeparador(cadena){
        let nuevaCadena = cadena;
        let segundoSeparador = this.obtenerSegundoNuevoSeparador(cadena);
        if (segundoSeparador[0]){
            this.listaSeparadores.push(segundoSeparador[0]);
            nuevaCadena = segundoSeparador[1];
        }
        let separador = this.obtenerNuevoSeparador(nuevaCadena);
        if(separador){
            this.listaSeparadores.push(separador);
        }
        return this.listaSeparadores;
    }

    mostrarSeparador(pos){
        return this.listaSeparadores[pos];
    }

    obtenerNuevoSeparador(cadena){
        let separador;
        let regExpCad = '//\\[(.*)\\]';
        var re = new RegExp(regExpCad,"g"); 
        separador = [...cadena.matchAll(re)];
        if(separador.length == 0){
            return false;
        }
        return separador[0][1];
    }

    obtenerSegundoNuevoSeparador(cadena){
        let separador = '';
        let regExpCad = '\\]\\[(.*)\\]';
        var re = new RegExp(regExpCad,"g"); 
        separador = [...cadena.matchAll(re)];
        if(separador.length == 0){
            return false;
        }
        let segundoSeparador = separador[0][1];
        cadena = cadena.replace(re, "]")//elimina la parte que encontró para que no hayan problemas después
        return [segundoSeparador, cadena];
    }
}

export default SumaCadena;
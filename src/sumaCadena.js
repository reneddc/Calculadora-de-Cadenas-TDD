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
        if(this.esMayor1000(primerNumero)){
            primerNumero = 0;
        }
        this.listaNumeros.push(primerNumero);
    }

    capturarOtrosNumero(lista, pos){ //captura los números uno por uno despúes del primero 4,2,3 -> 2 y después 3 porque 4 es el primero
        let numero;
        numero = parseInt(lista[pos][1])
        if(this.esMayor1000(numero)){
            numero = 0;
        }
        return numero;
    }

    ejercerSeparadores(pos, cadena){
        let separador = `\\${this.listaSeparadores[pos]}`;
        if(this.listaSeparadores[pos].length > 1){          //para separadores con más de un caracter y evitar problemas con caracteres especiales del regex
            separador = "";
            for(var i = 0; i < this.listaSeparadores[pos].length; i++){
                separador = separador + `\\${this.listaSeparadores[pos][i]}`;
            }
        }
        let regExpCad = `${separador}(\\d+)`;
        var re = new RegExp(regExpCad,"g");
        let lista = [...cadena.matchAll(re)];//2. una vez que sacamos el número del separador dado por pos lo añadimos a la lista
        for(var i = 0; i < lista.length; i++){
            this.listaNumeros.push(this.capturarOtrosNumero(lista, i));
        }
        cadena = cadena.replace(re, "");//3. Borramos el número que ya se añadió para evitar que se repliquen después con otros separadores
        return cadena;
    }

    separarNumeros(cadena){
        let numero = 0;
        if(cadena.length != 0){
            this.capturarPrimerNumero(cadena);
            for(var i = 0; i < this.listaSeparadores.length; i++){
                cadena = this.ejercerSeparadores(i, cadena);//1. sacamos los números de acuerdo al separador
            }
            return this.listaNumeros.sort();
        }
        return numero;
    }

    obtenerListaNumeros(cadena){
        this.agregarSeparador(cadena);
        return this.separarNumeros(cadena);
    }

    sumarCadena(cadena){
        let total = 0;
        this.obtenerListaNumeros(cadena);
        for(var i = 0; i<this.listaNumeros.length; i++){
            total = total + this.listaNumeros[i];
        }
        return total;
    }
    
    esMayor1000(numero){
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
        return this.obtenerPrimerSeparador(separador);
    }

    obtenerPrimerSeparador(separador){
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
        cadena = this.quitarSegundoSeparador(cadena, re);
        return [segundoSeparador, cadena];
    }


    
    quitarSegundoSeparador(cadena, re){
        return cadena.replace(re, "]");
    }

}

export default SumaCadena;
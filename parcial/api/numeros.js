import config from '../config.js'
import AbstractFactory from '../model/DAOS/abstractFactory.js';


class ApiNumeros {

    constructor(){
        this.numerosModel =  AbstractFactory.get(config.MODO_PERSISTENCIA); 
    } 

    obtenerPromedio = async _ =>{
        return this.numerosModel.findPromedio()
    }
    
    obtenerMinMax= async _ =>{
        return this.numerosModel.findMinMax()
    }


    obtenerCantidad= async _ =>{
        return this.numerosModel.findCantidad()
    }


    obtenerNumeros = async id => {
        return id ? await this.numerosModel.findNumero(id) : await this.numerosModel.findNumeros();
    }

    guardarNumero = async numero => {
        return await this.numerosModel.saveNumeros(numero);
    }

}

export default ApiNumeros
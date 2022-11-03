import NumerosMemoria from "./numerosMemoria.js";
import NumerosMongo from './numerosMongo.js'

class AbstractFactory {

    static get(tipo) {
        switch (tipo) {
            case 'MONGO':
                console.log('---persistiendo en mongodb---');
                return new NumerosMongo();
            case 'MEM':
                console.log('---persistiendo en memoria---');
                return new NumerosMemoria();
            default:
                console.log('---persistiendo en memoria por default---');
                return new NumerosMongo();
        }
    }

}

export default AbstractFactory
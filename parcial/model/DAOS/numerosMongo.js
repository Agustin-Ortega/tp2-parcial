import Database from '../Database.js'
import { ObjectId } from 'mongodb'


class NumerosMongo {



    findPromedio = async _ => {
        try {

            if (!Database.connection) return {}
            let numeros = await Database.db.collection('numeros').find({}).toArray()
            let cantidadNumeros = numeros.length
            let subtotal
            numeros.forEach(num => subtotal += num)
            let promedio = subtotal / cantidadNumeros

            return {
                promedio,
                cantidadNumeros
            }

        } catch (error) {
            console.log('Error al calcular promedio ' + error.message);
        }

    }


    findMinMax = async _ => {
        try {
            let Numero_Max = this.calcularMax()
            let Numero_Min = this.calcularMin()

            return {
                Numero_Max,
                Numero_Min
            }
        }
        catch (error) {
            console.log('error al buscar minmax ' + error.message);
        }



    }

    calcularMax = async _ => {

        let numeros = await Database.db.collection('numeros').find({}).toArray()
        let max

        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i].numero > max) {
                max = numeros[i].numero
            }
        }
        return max
    }

    calcularMin = async _ => {

        let numeros = await Database.db.collection('numeros').find({}).toArray()
        let min


        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i].numero < min) {
                min = numeros[i].numero
            }
        }
        return min
    }


    findCantidad = async _ => {
        try {
            let cantidad_De_Numeros = await Database.db.collection('numeros').count()

            return {
                cantidad_De_Numeros,
            }
        }
        catch (error) {
            console.log('error al buscar numero ' + error.message);
        }

    }

    findNumero = async id => {

        try {
            if (!Database.connection) { return {} }

            let numero = await Database.db.collection('numeros').findOne({ _id: ObjectId(id) })
            return numero;
        }
        catch (error) {
            console.log('error al buscar numero ' + error.message);
        }

    }

    findNumeros = async () => {
        try {
            if (!Database.connection) { return [] }

            let numeros = await Database.db.collection('numeros').find({}).toArray()
            return numeros;
        }
        catch (error) {
            console.log('error al buscar numeros ' + error.message);
        }

    }

    saveNumeros = async numero => {
        try {
            if (!Database.connection) return {}

            await Database.db.collection('numeros').insertOne(numero)
            return numero
        }
        catch (error) {
            console.log('error al guardar numero ' + error.message);
        }

    }

}


export default NumerosMongo


class NumeroMemoria {

    constructor() {

        this.numeros = [{id:0, numero: 0}]

    }


    findPromedio = async _ =>{
        try {

            if (!Database.connection) return {}
            
            let cantidadNumeros = this.numeros.length
            let subtotal
            this.numeros.forEach(num => subtotal += num.numero)
            let promedio = subtotal / cantidadNumeros

            return {
                promedio,
                cantidadNumeros
            }

        } catch (error) {
            console.log('Error al calcular promedio ' + error.message);
        }

    }


    findMinMax = async _ =>{


        let Numero_Max = this.calcularMax()
        let Numero_Min = this.calcularMin()

        return {
            Numero_Max,
            Numero_Min
        }

    }

    calcularMax = async _ => {

        
        let max

        for (let i = 0; i < this.numero.length; i++) {
            if (this.numero[i].numero > max) {
            max = this.numero[i].numero
            }
        }
        return max
    }

    calcularMin = async _ => {

       
        let min

        for (let i = 0; i < this.numeros.length; i++) {
            if (this.numeros[i].numero < min) {
            min = this.numeros[i].numero
            }
        }
        return min
    }


    findCantidad = async _ =>{
        let cantidad_De_Numeros = this.numeros.length

        return {
            cantidad_De_Numeros,
        }
    }





    findNumero = async id => {
        return this.numeros.find(numero => numero.id == id)
    }

    findNumeros = async () => {
        return this.numeros;
    }

    saveNumeros = async numero => {
        let nuevoId
        if ((this.numeros.length - 1).id == 0) {
            nuevoId = 1
            numero.id = id;
        }
        else {
            const id = parseInt(this.numeros[this.numeros.length - 1].id) + 1;
            numero.id = id;
        }

        this.numeros.push(numero)
        return numero
    }

}


export default NumeroMemoria
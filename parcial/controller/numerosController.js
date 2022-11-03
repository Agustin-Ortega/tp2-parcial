import ApiNumeros from '../api/numeros.js'

 class ControladorNumeros {

    constructor() {
        this.api = new ApiNumeros()

    }


    getPromedio= async(req,res) => {
        res.json(await this.api.obtenerPromedio())
    }

    getMinMax = async(req,res) => {
        res.json(await this.api.obtenerMinMax())
    }

    getCantidad = async(req,res) => {
        res.json(await this.api.obtenerCantidad())
    }


    getNumeros = async (req, res) => {
        const { id } = req.params;
        res.json(await this.api.obtenerNumeros(id))
    }

   
    postNumeros = async (req, res) => {
        const nuevoNumero = req.body;
        res.json(await this.api.guardarNumero(nuevoNumero))
        // res.redirect('/')   para retornar la ruta raiz o base
    }


}

export default ControladorNumeros
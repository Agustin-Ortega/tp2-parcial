import express from "express";
import ControladorNumeros from '../controller/numerosController.js'

export class RouterNumeros {

    constructor() {
        this.router = express.Router()
        this.controladorNumeros = new ControladorNumeros()
    }
    start() {


        this.router.get('/promedio', this.controladorNumeros.getPromedio)


        this.router.get('/entrada', this.controladorNumeros.getNumeros)


        this.router.get('/minmax', this.controladorNumeros.getMinMax)

        this.router.get('/cantidad', this.controladorNumeros.getCantidad)


        //                DECLARACION   GET CLIENTES
        this.router.get('/:id?', this.controladorNumeros.getNumeros)

        //               DECLARACION   POST CLIENTES
        this.router.post('/:id?', this.controladorNumeros.postNumeros)


        return this.router
    }
}

import ILandVehicle from "./interface/ILandVehicle";

export default class Motocycle implements ILandVehicle{
    getCargo(): void {
        console.log("Ja pegamos a encomenda")
    }

    startRoute(): void {
        this.getCargo()
        console.log("Iniciando a entrega")
    }

}
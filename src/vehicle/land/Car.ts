import ILandVehicle from "./interface/ILandVehicle";

export default class Car implements ILandVehicle {
    getCargo(): void {
        console.log("Pegamos os passageiros, estamos prontos")
    }

    startRoute(): void {
        this.getCargo()
        console.log("Iniciando o trageto")
    }

}
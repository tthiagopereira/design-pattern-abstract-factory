import IAircraft from "./interface/IAircraft";

export default class Airplane implements IAircraft {
    checkWind(): void {
        console.log("Ventos a 25km, ventos ok!")
    }

    getCargo(): void {
        console.log("Pegamos os passageiros, estamos prontos");
    }

    startRoute(): void {
        this.checkWind()
        this.getCargo()
        console.log("Iniciando a decolagem")
    }

}
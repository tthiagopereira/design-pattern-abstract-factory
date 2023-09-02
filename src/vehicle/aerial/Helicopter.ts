import IAircraft from "./interface/IAircraft";

export class Helicopter implements IAircraft {
    checkWind(): void {
        console.log("Ventos a 25km, Sudeste, ventos ok!")
    }

    getCargo(): void {
        console.log("Passageiros ok. Ligando helices...")
    }

    startRoute(): void {
        this.checkWind()
        this.getCargo()
        console.log("Iniciando a decolagem....")
    }

}
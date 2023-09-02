import ITransportFactory from "../factories/interfaces/ITransportFactory";
import ILandVehicle from "../land/interface/ILandVehicle";
import IAircraft from "../aerial/interface/IAircraft";

export default class Client {

    private vehicle: ILandVehicle;
    private aircraft: IAircraft;
    constructor(factory: ITransportFactory) {
        this.vehicle = factory.createTransportVechicle();
        this.aircraft = factory.createTransportAircraft();
    }


    startRoute(): void {
        this.vehicle.startRoute()
        this.aircraft.startRoute()
    }
}
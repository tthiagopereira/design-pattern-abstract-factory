import ITransportFactory from "./interfaces/ITransportFactory";
import IAircraft from "../aerial/interface/IAircraft";
import ILandVehicle from "../land/interface/ILandVehicle";
import Airplane from "../aerial/Airplane";
import Car from "../land/Car";

export  default class UberTransport implements ITransportFactory{
    createTransportAircraft(): IAircraft {
        return new Airplane();
    }

    createTransportVechicle(): ILandVehicle {
        return new Car()
    }

}
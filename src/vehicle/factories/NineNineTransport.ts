import ITransportFactory from "./interfaces/ITransportFactory";
import IAircraft from "../aerial/interface/IAircraft";
import ILandVehicle from "../land/interface/ILandVehicle";
import Motocycle from "../land/Motocycle";
import {Helicopter} from "../aerial/Helicopter";

export default class NineNineTransport implements ITransportFactory {
    createTransportAircraft(): IAircraft {
        return new Helicopter();
    }

    createTransportVechicle(): ILandVehicle {
        return new Motocycle();
    }

}
import Client from "./vehicle/client/Client";
import Company from "./vehicle/consts/Company";
import ITransportFactory from "./vehicle/factories/interfaces/ITransportFactory";
import UberTransport from "./vehicle/factories/UberTransport";
import NineNineTransport from "./vehicle/factories/NineNineTransport";

const currentCompany = Company.NINENINE
let factory: ITransportFactory

switch (currentCompany) {
    case Company.UBER:
        factory = new UberTransport();
        break;
    case Company.NINENINE:
        factory = new NineNineTransport()
        break
    default:
        console.log("Compania desconhecida")
}

const client = new Client(factory)

client.startRoute();
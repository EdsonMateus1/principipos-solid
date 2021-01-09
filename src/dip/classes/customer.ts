import {
  CustumerProtocol,
  IndividualProtocol,
  CustumerOrder,
} from "./interfaces/customer_protocol";

// quebrando o pricipio pois IndividualCustomer implementa uma interface com uma
//caracteristica que nao ser usada

export class IndividualCustomer implements CustumerProtocol {
  firsName: string;
  lastName: string;
  cpf: string;
  cnpj: string;

  constructor(firsName: string, lastName: string, cpf: string) {
    this.firsName = firsName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.cnpj = "";
  }
}

export class IndividualCustomerCorrect implements IndividualProtocol, CustumerOrder {

  firsName: string;
  lastName: string;
  cpf: string;

  constructor(firsName: string, lastName: string, cpf: string) {
    this.firsName = firsName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
  getName(): string {
    return `seu cliente  ${this.firsName}  ${this.lastName}`;
    throw new Error("Method not implemented.");
  }
}

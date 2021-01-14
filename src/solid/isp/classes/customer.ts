import {
  CustumerProtocol,
  IndividualProtocol,
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

export class IndividualCustomerCorrect implements IndividualProtocol {
  firsName: string;
  lastName: string;
  cpf: string;

  constructor(firsName: string, lastName: string, cpf: string) {
    this.firsName = firsName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}

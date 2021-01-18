import {
  CustomerProtocol,
  IndividualProtocol,
  CustomerOrder,
  IndividualCustomerPremiumProtocol,
} from "./interfaces/customer_protocol";

// quebrando o pricipio ips pois IndividualCustomer implementa uma interface com uma
//caracteristica que nao vai ser usada , sempre busque fazer interface mais expecificadas

export class IndividualCustomer implements CustomerProtocol {
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

export class IndividualCustomerCorrect
  implements IndividualProtocol, CustomerOrder {
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

export class IndividualCustomerPremium
  implements CustomerOrder, IndividualCustomerPremiumProtocol {
  firsName: string;
  lastName: string;
  cpf: string;
  star: string;

  constructor(firsName: string, lastName: string, cpf: string, star: string) {
    this.firsName = firsName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.star = star;
  }

  getName(): string {
    return `seu cliente ${this.firsName} ${this.lastName} e um cliente ${this.star} estrelas`;
    throw new Error("Method not implemented.");
  }
}

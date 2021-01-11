export interface CustomerProtocol {
  firsName: string;
  lastName: string;
  cpf: string;
  cnpj: string;

}

export interface IndividualProtocol {
  firsName: string;
  lastName: string;
  cpf: string;
}


export interface CustomerOrder {
  getName(): string
}

export interface CustumerProtocol {
  firsName: string;
  lastName: string;
}

export interface IndividualProtocol {
  firsName: string;
  lastName: string;
  cpf: string;
}


export interface CustumerOrder {
  getName(): string
}

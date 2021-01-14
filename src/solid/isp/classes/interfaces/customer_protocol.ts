export interface CustumerProtocol {
  firsName: string;
  lastName: string;
}

export interface IndividualProtocol extends CustumerProtocol {
  cpf: string;
}

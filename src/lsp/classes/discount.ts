export abstract class Discount {
  protected discount = 0;
  calculate(price: number): unknown {
    //violando o principio pois retonar um tipo totalmete indefinido
    return price - (price * this.discount) / 100;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 50;
  calculate(price: number): string {
    return "Liskov"; //violando o principio
  }
}
export class TenPercentDiscount extends Discount {
  protected readonly discount = 10;
}


export class NoDiscount extends Discount {
  // quebrado o principio de Liskov pois estou mudando o comportamento padrao da classe base/pai
  calculate(price: number): number {
    return price;
  }
}

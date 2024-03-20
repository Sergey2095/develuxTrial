export interface IStockPrice {
  high: number;
  low: number;
  lastTradedPrevious: number;
  lastTraded: number;
}

export interface IStockInfo {
  type: string;
  price: IStockPrice;
  lotSize: string;
  currency: string;
  name: string;
}

export interface IStock {
  id: number;
  market: string;
  i: IStockInfo;
}

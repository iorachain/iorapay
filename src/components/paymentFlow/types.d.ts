interface Order {
  errors: string;
  fees: number;
  from: string;
  loading: true;
  price: string;
  symbol: string;
  to: number;
  typeFrom: string;
  typeTo: string;
}

export interface TickerPrice {
  order: Order;
}

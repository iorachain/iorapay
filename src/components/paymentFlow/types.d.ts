export interface Order {
  errors: string;
  fees: number;
  from: string;
  loading: true;
  price: string;
  qty: number;
  symbol: string;
  to: number;
  typeFrom: string;
  typeTo: string;
}

export interface TickerPrice {
  order: Order;
}

export interface OrderState {
  order: Order;
  getPrice?: (string, number?) => void;
}

export type OrderData = {
  asset: string;
  fiat: string;
};

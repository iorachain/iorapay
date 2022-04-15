// Swap Currencies types

interface CryptoCurrency {
  id: number;
  shortTitle: string;
  longTitle: string;
  price: number;
}

interface FiatCurrency {
  id: number;
  shortTitle: string;
  country: string;
  price: number;
}

interface SwapCurrenciesAction {
  from: FiatCurrency[] | CryptoCurrency[];
  to: CryptoCurrency[] | FiatCurrency[];
  price: number;
}

type DispatchPrice = (args: SwapCurrenciesAction) => SwapCurrenciesAction;

export type {
  CryptoCurrency,
  FiatCurrency,
  SwapCurrenciesAction,
  DispatchPrice,
};

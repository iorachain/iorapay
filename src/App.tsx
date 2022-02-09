import React, { Suspense } from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from "@ethersproject/providers";
import { MetaMaskProvider } from "./hooks/useMetaMask";
import "./style/global.scss";
import theme from "./ioraTheme";
import { ThemeProvider } from "@mui/material/styles";
import Loading from "./components/loading";

const Home = React.lazy(() => import("./layouts/home"));
const PaymentFlow = React.lazy(() => import("./components/paymentFlow"));
const PaymentForm = React.lazy(
  () => import("./components/paymentFlow/paymentForm")
);
const PIXPayment = React.lazy(
  () => import("./components/paymentFlow/pixPayment")
);
const FinishedPayment = React.lazy(
  () => import("./components/paymentFlow/finish")
);

function getLibrary(provider: ExternalProvider | JsonRpcFetchFunc) {
  return new Web3Provider(provider);
}

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Home />}>
              <Route element={<PaymentFlow />}>
                <Route path="/" element={<PaymentForm />} />
                <Route path="/step2" element={<PIXPayment />} />
                <Route path="/finish" element={<FinishedPayment />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </MemoryRouter>
    </ThemeProvider>
  );
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetaMaskProvider>
        <Main />
      </MetaMaskProvider>
    </Web3ReactProvider>
  );
}

export default App;

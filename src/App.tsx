import { MemoryRouter, Routes, Route } from "react-router-dom";
import Home from "./layouts/home";
import PaymentFlow from "./components/paymentFlow";
import PaymentForm from "./components/paymentFlow/paymentForm";
import PIXPayment from "./components/paymentFlow/pixPayment";
import FinishedPayment from "./components/paymentFlow/finish";
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

function getLibrary(provider: ExternalProvider | JsonRpcFetchFunc) {
  return new Web3Provider(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetaMaskProvider>
        <ThemeProvider theme={theme}>
          <MemoryRouter>
            <Routes>
              <Route element={<Home />}>
                <Route element={<PaymentFlow />}>
                  <Route path="/" element={<PaymentForm />} />
                  <Route path="/step2" element={<PIXPayment />} />
                  <Route path="/finish" element={<FinishedPayment />} />
                </Route>
              </Route>
            </Routes>
          </MemoryRouter>
        </ThemeProvider>
      </MetaMaskProvider>
    </Web3ReactProvider>
  );
}

export default App;

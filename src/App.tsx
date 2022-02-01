import { MemoryRouter, Routes, Route } from "react-router-dom";
import Home from "./layouts/home";
import PaymentFlow from "./components/paymentFlow";
import "./style/global.scss";

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<PaymentFlow />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

export default App;

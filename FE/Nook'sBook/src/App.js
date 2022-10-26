import "./styles.css";
import Home from "./pages/home";
import Orders from "./pages/orders";
import Products from "./pages/products";
import Create from "./pages/createOrder";
import SignIn from "./pages/signIn";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/books" element={<Products />} />
          <Route path="/createOrder" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

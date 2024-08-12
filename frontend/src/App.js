import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Restaurants } from "./containers/Restaurants.jsx";
import { Foods } from "./containers/Foods.jsx";
import { Orders } from "./containers/Orders.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        // 店舗一覧ページ
        <Route path="/restaurants" element={<Restaurants />}></Route>
        // フード一覧ページ
        <Route path="/foods" element={<Foods />}></Route>
        // 注文ページ
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/restaurants/:restaurantsId/foods" element={<Foods />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

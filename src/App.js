import "./App.css";
import { GlobalHeader } from "./components/globalHeader/GlobalHeader";
import { Routes, Route, Navigate } from "react-router-dom";
import { Stores } from "./screens/Stores/Stores";
import { OrderHistory } from "./screens/OrderHistory/OrderHistory";
import { Login } from "./screens/Login/Login";
import { GiftPage } from "./screens/GiftPage/GiftPage";
import { Homepage } from "./screens/Homepage/Homepage";

export default function App() {
  return (
    <div className="App">
      <GlobalHeader />
      <br />

      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Homepage />} />
        <Route path="/gift" element={<GiftPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/store" element={<Stores />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

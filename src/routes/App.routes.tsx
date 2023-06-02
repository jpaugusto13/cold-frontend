import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Register } from '../pages/Authentication/Register/Register';
import { Login } from '../pages/Authentication/Login/Login';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/entrar" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

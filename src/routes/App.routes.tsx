import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Register } from '../pages/Authentication/Register/Register';
import { Login } from '../pages/Authentication/Login/Login';
import { Double } from '../pages/Home/components/Games/Double';
import { MainContent } from '../pages/Home/components/MainContent/MainContent';
import { AuthProvider } from '../contexts/AuthContext';
export function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<MainContent />} />
            <Route path="double" element={<Double />} />
          </Route>
          <Route path="/cadastro" element={<Register />} />
          <Route path="/entrar" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

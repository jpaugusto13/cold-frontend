import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

import './navbar.scss';

export function NavBar() {
  const { isLoggedIn, logout, user } = useAuth();
  const { money } = user;
  return (
    <nav className="navbar">
      <Link to="/">
        <img alt="logo" className="logo" src="/public/imgs/logo.png" />
      </Link>
      {!isLoggedIn ? (
        <>
          <div>
            <Link className="sign-in" to={'/autenticacao/entrar'}>
              Entrar
            </Link>
            <Link className="sign-up" to="/autenticacao/cadastrar">
              Cadastra-se
            </Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <p className="money">R$ {money.toFixed(2).replace('.', ',')}</p>
            <button
              className="deposit"
              onClick={() => alert('Função ainda não desenvolvida')}
            >
              Depositar
            </button>
            <button className="logout" onClick={logout}>
              Sair
            </button>
          </div>
        </>
      )}
    </nav>
  );
}

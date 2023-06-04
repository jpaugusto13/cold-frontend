import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { useProSidebar } from 'react-pro-sidebar';

import './navbar.scss';

export function NavBar() {
  const { collapseSidebar, collapsed } = useProSidebar();

  const { isLoggedIn, logout, user } = useAuth();
  const { money } = user;
  return (
    <nav className="navbar">
      {/* <Link to="/">
        <img alt="logo" className="logo" src="imgs/logo.png" />
      </Link> */}
      <button className={collapsed ? 'toggle-sidebar' : 'toggle-sidebar active' }
        onClick={() => {
          collapseSidebar(!collapsed);
        }}
      >
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </button>
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
            <p>Seja bem vindo: {user.name}</p>
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

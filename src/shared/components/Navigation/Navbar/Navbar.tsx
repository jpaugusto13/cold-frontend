import { Link } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
import { useProSidebar } from 'react-pro-sidebar';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './navbar.scss';
import api from '../../../../services/api';

export function NavBar() {
  const { pathname } = useLocation();

  const { collapseSidebar, collapsed } = useProSidebar();
  const { isLoggedIn, logout, user } = useAuth();
  const { firstName, money } = user;
  const [moneyUser, setMoneyUser] = useState(money);

  useEffect(() => {
    setMoneyUser(money);
  }, [money]);

  const deleteAll = async () => {
    await api.delete('/gameDouble/deleteBet');
  };

  return (
    <nav className="navbar">
      {pathname !== '/autenticacao/entrar' &&
      pathname !== '/autenticacao/cadastrar' ? (
        <button
          className={collapsed ? 'toggle-sidebar' : 'toggle-sidebar active'}
          onClick={() => {
            collapseSidebar(!collapsed);
          }}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </button>
      ) : (
        <Link to="/">
          <img alt="logo" className="logo" src="imgs/logo.png" />
        </Link>
      )}

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
            {user.email == 'pedroaugusto131204@gmail.com' ? (
              <button onClick={deleteAll} >Apagar banco de dados</button>
            ) : (
              <></>
            )}
            <p style={{ color: 'gold' }}>Seja bem vindo: {firstName}</p>
            <p className="money">R$ {moneyUser.toFixed(2).replace('.', ',')}</p>
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

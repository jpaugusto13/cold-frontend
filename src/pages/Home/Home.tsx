import { Link, Outlet } from 'react-router-dom';

import './home.scss';

import { useAuth } from '../../hooks/useAuth';

export function Home() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <>
      {!isLoggedIn ? (
        <div>
          <p>
            <Link to="/entrar">entrar</Link> /{' '}
            <Link to="/cadastro">cadastro</Link>
          </p>
        </div>
      ) : (
        <button onClick={logout}>sair</button>
      )}
      <title>Home | Cold</title>

      <main>
        <aside className="aside-home">
          <h2>Games</h2>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="double">Double</Link>
            </li>
          </ul>
        </aside>
        <Outlet />
      </main>
    </>
  );
}

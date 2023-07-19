import { Outlet } from 'react-router-dom';
import { NavBar } from '../../shared/components/Navigation/Navbar/Navbar';
import './authentication.scss';

export function Authentication() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

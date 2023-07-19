import { Outlet } from 'react-router-dom';

import { SidebarTeste } from '../../shared/components/Navigation/Sidebar/Sidebar';
import { NavBar } from '../../shared/components/Navigation/Navbar/Navbar';
import './home.scss';

export function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <title>Home | Cold</title>

      <main>
        <SidebarTeste />
        <Outlet />
      </main>
    </>
  );
}

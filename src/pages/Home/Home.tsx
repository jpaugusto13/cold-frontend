import { Outlet } from 'react-router-dom';

import { SidebarTeste } from '../../shared/components/Sidebar/Sidebar';
import { NavBar } from '../../shared/components/Navigation/Navbar';
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

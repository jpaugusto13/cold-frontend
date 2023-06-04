import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export function SidebarTeste() {
  return (
    <Sidebar
      style={{ border: '0px ' }}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: '#0f1923;',
          borderRight: '1px solid #3e4246;',
          color: 'white',
        },
      }}
    >
      <Menu>
        <MenuItem component={<Link to="/" />}>Home</MenuItem>
        <SubMenu label="Games">
          <MenuItem component={<Link to="/double" />}>Double</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}

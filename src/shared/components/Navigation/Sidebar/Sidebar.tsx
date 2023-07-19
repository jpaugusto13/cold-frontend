import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
  menuClasses,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import CasinoIcon from '@mui/icons-material/Casino';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import CellTowerIcon from '@mui/icons-material/CellTower';

export function SidebarTeste() {
  return (
    <Sidebar
      breakPoint="md"
      defaultCollapsed={false}
      style={{ border: '0px ' }}
      transitionDuration={800}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: '#0f1923',
          borderRight: '1px solid #3e4246',
          color: 'white',
        },
      }}
    >
      <Menu
        rootStyles={{
          ['.' + menuClasses.button]: {
            '&:hover': {
              backgroundColor: '#759fca',
            },
          },
        }}
      >
        <MenuItem component={<Link to="/" />} icon={<HomeIcon />}>
          Home
        </MenuItem>
        <SubMenu
          rootStyles={{
            ['& > .' + menuClasses.button]: {
              color: '#9f0099',
              '&:hover': {
                backgroundColor: '#000',
              },
            },
            ['.' + menuClasses.subMenuContent]: {
              backgroundColor: '#152331',
            },
          }}
          label="Games"
          icon={<CasinoIcon />}
        >
          <MenuItem
            component={<Link to="/double" />}
            icon={<ViewCarouselIcon />}
          >
            Double
          </MenuItem>
          <MenuItem
            disabled
            component={<Link to="/double" />}
            icon={<CellTowerIcon />}
          >
            Tower
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}

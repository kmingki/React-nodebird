import React from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import DesktopLayout from './DesktopLayout';
import TabletLayout from './TabletLayout';
import MobileLayout from './MobileLayout';
import SideBar from '../SideBar';
import SideMenu from './SideMenu';
import Title from './Title';
import Menu from './Menu';

const Layout = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 }); // ~500
  const isTablet = useMediaQuery({ minWidth: 501, maxWidth: 1023 }); // 501~1023
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      { isDesktop && (
        <DesktopLayout Side={<SideBar />}>
          {children}
        </DesktopLayout>
      )}
      { isTablet && (
      <TabletLayout SideMenu={<SideMenu />} Side={<SideBar />}>
        {children}
      </TabletLayout>
      )}
      { isMobile && (
      <MobileLayout Header={<Title />} Menu={<Menu />}>
        {children}
      </MobileLayout>
      )}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

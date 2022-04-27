import React from 'react';
import PropTypes from 'prop-types';

const TabletLayout = ({ children, SideMenu }) => (
  <div style={{ display: 'flex', margin: '0 auto' }}>
    <div style={{ width: '100px' }}>
      {SideMenu}
    </div>
    <div style={{ width: '600px' }}>
      {children}
    </div>
  </div>
);

TabletLayout.propTypes = {
  children: PropTypes.node.isRequired,
  SideMenu: PropTypes.element.isRequired,
};

export default TabletLayout;

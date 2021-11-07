import React from 'react';
import PropTypes from 'prop-types';

const TabletLayout = ({children, SideMenu, Side}) => {
    
    return(
        <div id="tabletWrapper" style={{display:"flex", width:"700px", margin:"0 auto"}}>
            <div style={{width:"100px"}}>
            {SideMenu}
            </div>
            <div style={{width:"600px"}}>
            {children}
            </div>
        </div>
    );
};

TabletLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TabletLayout;
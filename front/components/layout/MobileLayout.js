import React from 'react';
import PropTypes from 'prop-types';

const menuStyle = {
    display:"flex",
    height:"70px",
    position: "fixed",
    bottom:"0",
    zIndex:"99",
    background:"white",
    width:"100%",
    borderTop: "solid thin #EFEEF5",
    display: "flex", 
    justifyContent:"space-evenly",
    alignItems: "center"
};

const MobileLayout = ({children, Header, Menu}) => {

    return(
        <>
        <div id="wrap">
            {Header}
            <div className="children" style={{marginTop: "49px"}}>
            {children}
            </div>
            <div className="menu" style={menuStyle}>
            {Menu}
            </div>
        </div>
        </>
    );
};

MobileLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MobileLayout;

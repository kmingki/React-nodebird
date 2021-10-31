import React from 'react';
import PropTypes from 'prop-types';

const MobileLayout = ({children, Header, Menu}) => {

    return(
        <>
        <div id="wrap" style={{display:"flex", flexFlow:"row wrap", width:"100%"}}>
            {Header}
            {children}
            {Menu}
        </div>
        </>
    );
};

MobileLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MobileLayout;

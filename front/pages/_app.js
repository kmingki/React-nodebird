import React from 'react';
import Head from 'next/head';
import PropTypes from "prop-types";
import withReduxSaga from 'next-redux-saga';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore.js';

//npm run dev
//pages의 공통부분
const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    )
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(withReduxSaga(NodeBird));
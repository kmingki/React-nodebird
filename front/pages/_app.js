/* eslint-disable */
import React from 'react';
import Head from 'next/head';
import PropTypes from "prop-types";
import 'antd/dist/antd.css';
import '../css/main.css';
import wrapper from '../store/configureStore.js';
import { useRouter } from 'next/router';

//pages의 공통부분
const NodeBird = ({ Component, pageProps }) => {
    
    const router = useRouter();

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Chatter</title>
                <link rel='icon' type='image/x-icon' href='/favicon.ico'></link>
            </Head>
            <Component {...pageProps} key={router.asPath}/>
        </>
    )
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);
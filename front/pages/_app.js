import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import '../css/global.css'; // Global CSS cannot be imported from files other than your Custom <App>
import wrapper from '../store/configureStore'; // to initialize all pages with the store as follows.

// pages의 공통부분
// Component prop is the active page
// pageProps is an object with the initial props that were preloaded for your page

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Chatter</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    </Head>
    <Component {...pageProps} />
  </>
);

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);

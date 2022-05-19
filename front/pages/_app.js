import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import '../css/global.css'; // Global CSS cannot be imported from files other than your Custom <App>
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import wrapper from '../store/configureStore'; // to initialize all pages with the store as follows.
// pages의 공통부분
// Component prop is the active page
// pageProps is an object with the initial props that were preloaded for your page

const MyApp = ({ Component, pageProps }) => {
  const store = useStore();

  return (
    <>
      <PersistGate loading={<div>Loading</div>} persistor={store.__persistor}>
        <Head>
          <meta charSet="utf-8" />
          <title>Chatter</title>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);

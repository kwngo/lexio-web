import React, { Component } from 'react';
import Router from 'next/router';
import App, { Container } from 'next/app';
import NProgress from 'nprogress';
import getConfig from 'next/config'

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

function MyApp({Component, pageProps}) {
    return (
        <Component {...pageProps} />
    )
}
export default MyApp

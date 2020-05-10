import React, { Component } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';

// 글로벌 스타일
import './styles/global.scss';

function App({ Component, pageProps }: AppProps) {
    return (
        <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
        </AnimatePresence>
    );
}

export default App;

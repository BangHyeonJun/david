import React, { Component } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';

// 글로벌 스타일
import './styles/global.scss';

// 컨텍스트
import { SideBarsContextProvider } from './contexts/SideBarContext';

// 페이지 전환 참고
// https://www.youtube.com/watch?v=zIDpZi-36Qs
function App({ Component, pageProps }: AppProps) {
    return (
        <AnimatePresence>
            <SideBarsContextProvider>
                <Component {...pageProps} />
            </SideBarsContextProvider>
        </AnimatePresence>
    );
}

export default App;

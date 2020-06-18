import React from 'react';
import Link from 'next/link';

// 스타일
import classNames from 'classnames/bind';
import styles from './index.module.scss';
const cx = classNames.bind(styles);

// 컴포넌트
import Layout from './components/Layout/Layout';
import { motion, AnimatePresence, transform } from 'framer-motion';

// 유틸
import useWindowSize from './utils/resize';

function history() {
    return (
        <Layout title={'HISTORY'}>
            <div></div>
        </Layout>
    );
}

export default history;

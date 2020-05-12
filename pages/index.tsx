import React from 'react';
import Link from 'next/link';

// 스타일
import classNames from 'classnames/bind';
import styles from './index.module.scss';
const cx = classNames.bind(styles);

// 컴포넌트
import Layout from './components/Layout';
import { motion } from 'framer-motion';

function Index() {
    return (
        <Layout prevLink={'/'} nextLink={'/blog'}>
            <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 60, opacity: 0 }}
                className={cx('wrap')}
            >
                <h1>내 소개</h1>
            </motion.div>
        </Layout>
    );
}

export default Index;

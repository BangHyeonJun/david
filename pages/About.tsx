import React from 'react';

// 스타일
import classNames from 'classnames/bind';
import styles from './About.module.scss';
const cx = classNames.bind(styles);

import Layout from './components/Layout/Layout';

import { motion, AnimatePresence } from 'framer-motion';

function About() {
    return (
        <Layout title={'ABOUT'}>
            <div className={cx('world')}>
                <div className={cx('')}>
                    <div className={cx('name')}>
                        <span>Bang Hyeon Jun | David Bang</span>
                        <span>Welcome, this page is my portfolio page</span>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default About;

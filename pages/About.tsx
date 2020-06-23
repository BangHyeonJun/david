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
                    </div>
                    <div className={cx('Intoroduce')}>
                        <span>소개글</span>
                    </div>
                    <div className={cx('work-experience')}>
                        <span>경력</span>
                    </div>
                    <div className={cx('other-experience')}>
                        <span>다른일</span>
                    </div>
                    <div className={cx('-experience')}>
                        <span>스킬</span>
                    </div>
                    <div className={cx('-experience')}>
                        <span>경력기술서 링크</span>
                        <span>블로그 링크</span>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default About;

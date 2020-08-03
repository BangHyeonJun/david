import React, { useEffect } from 'react';
import Link from 'next/link';

// 스타일
import classNames from 'classnames/bind';
import styles from './history.module.scss';
const cx = classNames.bind(styles);

// 컴포넌트
import Layout from './components/Layout/Layout';
import {
    motion,
    AnimatePresence,
    transform,
    useViewportScroll,
    useTransform,
} from 'framer-motion';

function history() {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    useEffect(() => {
        console.log(scrollYProgress);
    }, [scrollYProgress]);

    useEffect(() => {
        console.log(scale);
    }, [scale]);

    return (
        <Layout title={'HISTORY'}>
            <div className={cx('wrap')}>
                {/* 타이틀 Wrap*/}
                <div className={cx('title-wrap')}></div>

                {/* 히스토리 막대 */}
                <div className={cx('history-wrap')}>
                    <div className={cx('history-container')}>
                        <section
                            className={cx('history-section', 'active')}
                        ></section>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default history;

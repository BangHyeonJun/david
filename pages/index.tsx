import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// 스타일
import classNames from 'classnames/bind';
import styles from './index.module.scss';
const cx = classNames.bind(styles);

// 컴포넌트
import Layout from './components/Layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';

const icon = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: 'rgba(255, 255, 255, 1)',
    },
};

function Index() {
    const [state, setstate] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setstate(false);
        }, 2000);
    }, []);

    const pageVariants = {
        initial: {
            // opacity: 0,
            transform: `rotateY(360deg)`,
            perspectiveOrigin: 'center',
            perspective: '300px',
            transition: { duration: 0.5 },
        },
        in: {
            // opacity: 1,
            transform: `rotateY(0deg)`,
            perspectiveOrigin: 'center',
            perspective: '0px',
            transition: { duration: 0.5 },
        },
        out: {
            // opacity: 0,
            transform: `rotateY(360deg)`,
            perspectiveOrigin: 'center',
            perspective: '300px',
            transition: { duration: 2 },
        },
    };

    return (
        <Layout title={'HOME'}>
            <div>테스트</div>
            {/* <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                className={cx('wrap')}
            > */}
            {/* <motion.div
                            animate={{ x: 0, opacity: 1 }}
                            initial={{ x: 60, opacity: 0 }}
                            className={cx('cardWrap')}
                        >
                            <h1>내 소개</h1>
                        </motion.div> */}
            {/* </motion.div> */}
        </Layout>
    );
}

export default Index;

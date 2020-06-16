import React, { useState, useEffect } from 'react';
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
    const { width } = useWindowSize();

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
            <div className={cx('wrap')}>
                <div className={cx('introduce-wrap')}>
                    <div className={cx('introduce-main')}>
                        <div className={cx('text-wrap')}>
                            <motion.div
                                initial={{
                                    transform: 'translate(0px, -102px)',
                                }}
                                animate={{
                                    transform: [
                                        'translate(0px, -102px)',
                                        'translate(0px, 14px)',
                                        'translate(0px, 0px)',
                                    ],
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.1,
                                    ease: 'circIn',
                                }}
                            >
                                <span>Hello</span>
                            </motion.div>
                        </div>
                        <div className={cx('text-wrap')}>
                            <motion.div
                                initial={{
                                    transform: 'translate(0px, -102px)',
                                }}
                                animate={{
                                    transform: [
                                        'translate(0px, -102px)',
                                        'translate(0px, 13px)',
                                        'translate(0px, 0px)',
                                    ],
                                }}
                                transition={{
                                    delay: 0.4,
                                    duration: 1,
                                    stiffness: 260,
                                    damping: 20,
                                    ease: 'circIn',
                                }}
                            >
                                <span>My N</span>
                            </motion.div>
                            <motion.div
                                initial={{
                                    transform: 'translate(0px, -102px)',
                                }}
                                animate={{
                                    transform: [
                                        'translate(0px, -102px)',
                                        'translate(0px, 14px)',
                                        'translate(0px, 0px)',
                                    ],
                                }}
                                transition={{
                                    delay: 0.2,
                                    duration: 1,
                                    stiffness: 260,
                                    damping: 20,
                                    ease: 'circIn',
                                }}
                            >
                                <span>ame i</span>
                            </motion.div>
                            <motion.div
                                initial={{
                                    transform: 'translate(0px, -102px)',
                                }}
                                animate={{
                                    transform: [
                                        'translate(0px, -102px)',
                                        'translate(0px, 10px)',
                                        'translate(0px, 0px)',
                                    ],
                                }}
                                transition={{
                                    delay: 0.1,
                                    duration: 1,
                                    stiffness: 260,
                                    damping: 20,
                                    ease: 'circIn',
                                }}
                            >
                                <span>s&nbsp;</span>
                            </motion.div>
                            <motion.div
                                initial={{
                                    transform: 'translate(0px, -102px)',
                                }}
                                animate={{
                                    transform: [
                                        'translate(0px, -102px)',
                                        'translate(0px, -80px)',
                                        'translate(0px, 15px)',
                                        'translate(0px, 0px)',
                                    ],
                                }}
                                transition={{
                                    delay: 0.4,
                                    duration: 1,
                                    stiffness: 260,
                                    damping: 20,
                                    ease: 'circIn',
                                }}
                                className={cx('david-wrap')}
                                // whileHover={{
                                //     transform: [
                                //         'scale(1) rotateZ(0deg)',
                                //         'scale(1.2) rotateZ(0deg)',
                                //         'scale(1.2) rotateZ(-5deg)',
                                //         'scale(1.2) rotateZ(5deg)',
                                //         'scale(1.2) rotateZ(-5deg)',
                                //         'scale(1.2) rotateZ(5deg)',
                                //         'scale(1.2) rotateZ(-5deg)',
                                //         'scale(1.2) rotateZ(5deg)',
                                //         'scale(1.2) rotateZ(-5deg)',
                                //         'scale(1.2) rotateZ(5deg)',
                                //         'scale(1.2) rotateZ(0deg)',
                                //         'scale(1) rotateZ(0deg)',
                                //     ],
                                //     transition: {
                                //         loop: 'Infinity',
                                //         duration: 0.7,
                                //         repeatDelay: 1,
                                //     },
                                // }}
                            >
                                <Link href={'/About'}>
                                    <span className={cx('parisienne', 'david')}>
                                        David
                                    </span>
                                </Link>
                            </motion.div>
                        </div>
                        <div className={cx('text-wrap')}>
                            <motion.div
                                initial={{
                                    transform: 'translate(0px, -102px)',
                                }}
                                animate={{
                                    transform: [
                                        'translate(0px, -102px)',
                                        'translate(0px, 11px)',
                                        'translate(0px, 0px)',
                                    ],
                                }}
                                transition={{
                                    delay: 0.3,
                                    duration: 1,
                                    stiffness: 260,
                                    damping: 20,
                                    ease: 'circIn',
                                }}
                            >
                                <span>I'</span>
                            </motion.div>
                            <motion.div
                                initial={{
                                    transform: 'translate(0px, -102px)',
                                }}
                                animate={{
                                    transform: [
                                        'translate(0px, -102px)',
                                        'translate(0px, 12px)',
                                        'translate(0px, 0px)',
                                    ],
                                }}
                                transition={{
                                    delay: 0.1,
                                    duration: 1,
                                    stiffness: 260,
                                    damping: 20,
                                    ease: 'circIn',
                                }}
                            >
                                <span>m&nbsp;</span>
                            </motion.div>
                            <motion.div
                                initial={{
                                    transform: 'translate(0px, -102px)',
                                }}
                                animate={{
                                    transform: [
                                        'translate(0px, -102px)',
                                        'translate(0px, 14px)',
                                        'translate(0px, 0px)',
                                    ],
                                }}
                                transition={{
                                    delay: 0.4,
                                    duration: 1,
                                    stiffness: 260,
                                    damping: 20,
                                    ease: 'circIn',
                                }}
                            >
                                <span>a Web&nbsp;</span>
                            </motion.div>
                            <motion.div
                                initial={{
                                    transform: 'translate(0px, -102px)',
                                }}
                                animate={{
                                    transform: [
                                        'translate(0px, -102px)',
                                        'translate(0px, 10px)',
                                        'translate(0px, 0px)',
                                    ],
                                }}
                                transition={{
                                    delay: 0.2,
                                    duration: 1,
                                    stiffness: 260,
                                    damping: 20,
                                    ease: 'circIn',
                                }}
                            >
                                <span>developer</span>
                            </motion.div>
                        </div>
                    </div>
                    <div className={cx('introduce-sub')}>
                        <div className={cx('introduce-sub-item')}>
                            <motion.div
                                initial={{
                                    transform: 'translate(-130px, 0px)',
                                }}
                                animate={{
                                    transform: 'translate(0px, 0px)',
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 260,
                                    damping: 10,
                                    delay: 1,
                                }}
                            >
                                Frontend Developer
                            </motion.div>
                        </div>
                        <div className={cx('introduce-sub-item')}>
                            &nbsp;/&nbsp;
                        </div>
                        <div className={cx('introduce-sub-item')}>
                            <motion.div
                                initial={{
                                    transform: 'translate(-130px, 0px)',
                                }}
                                animate={{
                                    transform: 'translate(0px, 0px)',
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 1,
                                }}
                            >
                                Backend Developer
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className={cx('picture-wrap')}>
                    <motion.div
                        initial={{
                            clipPath: 'circle(0px at 100% 50%)',
                            filter: 'opacity(1)',
                        }}
                        animate={{
                            clipPath:
                                width > 768
                                    ? 'circle(700px at 100% 50%)'
                                    : 'circle(100% at 90% 50%)',
                            filter: 'opacity(0.4)',
                            // transitionEnd: {
                            //     clipPath: 'none',
                            // },
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 70,
                            damping: 20,
                        }}
                        className={cx('picture-container')}
                    >
                        <img
                            src={'img/home/main.png'}
                            className={cx('mainIMG')}
                        ></img>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
}

export default Index;

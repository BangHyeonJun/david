import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import { motion, AnimatePresence } from 'framer-motion';

// 컴포넌트
import SideBar from './SideBar/SideBar';

// 컨텍스트
import { SnsContextProvider } from '../../contexts/SnsContext';
import { useSideBarsState } from '../../contexts/SideBarContext';

// 스타일
import styles from './Layout.module.scss';
const cx = classNames.bind(styles);

type LayoutProps = {
    children: React.ReactNode;
    title: string;
};

function Layout({ children, title }: LayoutProps) {
    const sideBarsState = useSideBarsState();
    const [isVisible, setIsVisible] = useState(true);
    const [showChildren, setShowChildren] = useState(false);

    useEffect(() => {
        // 메인타이틀을 보여주는 state
        setTimeout(() => {
            setIsVisible(false);

            // children을 보여주는 state
            setTimeout(() => {
                setShowChildren(true);
            }, 800);
        }, 1400);
    }, []);

    /* 타이틀 배경이 한바뀌 도는 애니메이션 */
    const mainTitleContainer = {
        initial: {
            opacity: 0,
            transform: `rotateY(360deg)`,
            perspectiveOrigin: 'center',
            perspective: '300px',
            transition: { duration: 0.5 },
        },
        in: {
            opacity: 1,
            transform: `rotateY(0deg)`,
            perspectiveOrigin: 'center',
            perspective: '0px',
            transition: { duration: 0.5 },
            backgroundColor: '#000',
        },
        out: {
            opacity: 0,
            transform: `rotateY(360deg)`,
            perspectiveOrigin: 'center',
            perspective: '300px',
            transition: { duration: 0.5, delay: 0.3 },
        },
    };

    /* 타이틀이 올라오는 애니메이션 */
    const mainTitle = {
        initial: {
            opacity: 0,
            transform: `translate(0px, 100%)`,
            transition: { duration: 0.3, delay: 0.5 },
        },
        in: {
            opacity: 1,
            transform: `translate(0px, 0%)`,
            transition: { duration: 0.3, delay: 0.5 },
        },
        out: {
            opacity: 0,
            transform: `translate(0px, -100%)`,
            transition: { duration: 0.3 },
        },
    };

    return (
        <SnsContextProvider>
            <div className={cx('wrap')}>
                {/* 사이드 바 영역 */}
                <div className={cx('sidebar-wrap')}>
                    <SideBar></SideBar>
                </div>

                {/* 페이지 이동시 타이틀 영역 */}
                <div className={cx('main-title-wrap')}>
                    <AnimatePresence>
                        {/* 메인 타이틀 부분 */}
                        {isVisible && (
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={mainTitleContainer}
                                className={cx('main-title-container')}
                            >
                                <motion.div
                                    initial="initial"
                                    animate="in"
                                    exit="out"
                                    variants={mainTitle}
                                    className={cx('main-title')}
                                >
                                    {title}
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {/* Children 부분 */}
                        {showChildren && (
                            <motion.div
                                animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                className={cx('children-wrap')}
                            >
                                {children}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                {/* 
                <div className={cx('children-wrap')}>
                    <AnimatePresence>
                    </AnimatePresence>
                </div> */}

                {/* <div className={cx('contents-wrap')}></div> */}
                {/* TODO : 맨 끝 이상으로 가면 더이상 가지지 않게 수정 해야함 */}
                {/* <NextButton href={nextLink}></NextButton> */}
            </div>
        </SnsContextProvider>
    );
}

export default Layout;

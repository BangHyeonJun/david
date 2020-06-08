import React from 'react';
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
};

function Layout({ children }: LayoutProps) {
    const sideBarsState = useSideBarsState();

    const pageVariants = {
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
            transition: { duration: 2 },
        },
        out: {
            opacity: 0,
            transform: `rotateY(360deg)`,
            perspectiveOrigin: 'center',
            perspective: '300px',
            transition: { duration: 2 },
            // transition: { duration: 2 },
        },
    };
    return (
        <SnsContextProvider>
            <div className={cx('wrap')}>
                {/* TODO : 맨 끝 이상으로 가면 더이상 가지지 않게 수정 */}
                {/* <PrevButton href={prevLink}></PrevButton> */}

                <div className={cx('sidebar-wrap')}>
                    <SideBar></SideBar>
                </div>

                <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    className={cx('contents-wrap')}
                >
                    {children}
                </motion.div>

                {/* <div className={cx('contents-wrap')}></div> */}
                {/* TODO : 맨 끝 이상으로 가면 더이상 가지지 않게 수정 해야함 */}
                {/* <NextButton href={nextLink}></NextButton> */}
            </div>
        </SnsContextProvider>
    );
}

export default Layout;

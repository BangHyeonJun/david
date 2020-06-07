import React from 'react';
import Link from 'next/link';

// 로고
// import Logo from '../../../public/img/logo.png';

// 컨텍스트
import { useSideBarsState } from '../../contexts/SideBarContext';

// 스타일
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
const cx = classNames.bind(styles);

import { motion } from 'framer-motion';

function SideBar() {
    const SideBarsState = useSideBarsState();

    return (
        <div className={cx('wrap')}>
            <div className={cx('side-container')}>
                {/* 로고 */}
                <div className={cx('logo-box')}>
                    <div className={cx('logo')}>
                        {/* <img src={Logo}></img> */}
                    </div>
                    <div className={cx('logo-title')}>
                        <span>DAVID</span>
                    </div>
                </div>

                {/* 메뉴 */}
                <div className={cx('menu-box')}>
                    <div>
                        <div>아이콘</div>
                    </div>
                </div>

                {/* 컨텍트 */}
                <div className={cx('sns-box')}>
                    <div>SNS</div>
                </div>
                {/* <div className={cx('logo-container')}>로고</div>
                <div className={cx('side-item')}>
                    <span>HOME</span>
                </div>
                <div className={cx('side-item')}>
                    <span>ABOUT</span>
                </div>
                <div className={cx('side-item')}>
                    <span>BLOG</span>
                </div> */}
            </div>
        </div>
    );
}

export default SideBar;

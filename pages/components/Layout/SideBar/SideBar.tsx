import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// 컨텍스트
import {
    useSideBarsDispatch,
    useSideBarsState,
} from '../../../../contexts/SideBarContext';
// import { useSnsState } from '../../../../contexts/SnsContext';

// 스타일
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
const cx = classNames.bind(styles);

import { motion } from 'framer-motion';

type menuType = {
    title: string;
    style: string;
    url: string;
    active: boolean;
};

function SideBar() {
    const SideBarsState = useSideBarsState();
    const snsState = useSnsState();
    const setSideBarsDispatch = useSideBarsDispatch();
    const router = useRouter();

    useEffect(() => {
        setSideBarsDispatch({
            type: 'ACTIVE',
            pathName: router.pathname,
        });
    }, [router]);

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
                    {SideBarsState.map((menu, idx) => (
                        <Link key={menu.id} href={menu.url}>
                            <motion.div
                                className={cx('menu-item', {
                                    active: menu.active,
                                })}
                                whileTap={{
                                    scale: 0.8,
                                    borderRadius: '100%',
                                }}
                                transition={{
                                    duration: 0.5,
                                }}
                            >
                                <div
                                    className={cx('icon', `${menu.style}`)}
                                ></div>
                                <span className={cx('title')}>
                                    {menu.title}
                                </span>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* 컨텍트 */}
                <div className={cx('sns-box')}>
                    {snsState.map(sns => (
                        <Link key={sns.id} href={sns.href}>
                            <a target="_blank">
                                <div className={cx('sns-item')}>
                                    <div
                                        className={cx('icon', `${sns.style}`)}
                                    ></div>
                                    <span className={cx('title')}>
                                        {sns.title}
                                    </span>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SideBar;

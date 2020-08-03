import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

// 컨텍스트
import {
    useSideBarsDispatch,
    useSideBarsState,
} from '../../../../contexts/SideBarContext';
import { useSnsState } from '../../../../contexts/SnsContext';

// 스타일
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
const cx = classNames.bind(styles);

import useWindowSize from '../../../utils/resize';

function SideBar() {
    const SideBarsState = useSideBarsState();
    const snsState = useSnsState();
    const setSideBarsDispatch = useSideBarsDispatch();
    const router = useRouter();
    const [width, height] = useWindowSize();
    const [tempWidth, setTempWidth] = useState(0);
    const [menuFlag, setMenuFlag] = useState(false);

    useEffect(() => {
        setSideBarsDispatch({
            type: 'ACTIVE',
            pathName: router.pathname,
        });
    }, [router]);

    useEffect(() => {
        setTempWidth(width);
    }, [width]);

    const handleMenuButton = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.preventDefault();

        setMenuFlag(old => !old);
    };

    return (
        <div className={cx('wrap')}>
            <div className={cx('side-container')}>
                {/* 로고 */}
                <Link key={SideBarsState[0].id} href={SideBarsState[0].url}>
                    <div className={cx('logo-box')}>
                        <div className={cx('logo')}>
                            {/* <img src={Logo}></img> */}
                        </div>
                        <div className={cx('logo-title')}>
                            <span>DAVID</span>
                        </div>
                    </div>
                </Link>

                <div className={cx('desktop-menus')}>
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
                                            className={cx(
                                                'icon',
                                                `${sns.style}`,
                                            )}
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

                <div className={cx('menu-btn-wrap')}>
                    <button
                        onClick={handleMenuButton}
                        className={cx(
                            'menu-btton',
                            { close: menuFlag },
                            { menu: !menuFlag },
                        )}
                    />
                </div>
                <div
                    className={cx(
                        'phone-menus',
                        { show: menuFlag },
                        { hide: !menuFlag },
                    )}
                >
                    <div className={cx('menu-box')}>
                        {SideBarsState.map(menu => (
                            <Link key={menu.id} href={menu.url}>
                                <div
                                    className={cx('menu-item', {
                                        active: menu.active,
                                    })}
                                >
                                    <motion.div
                                        whileTap={{
                                            scale: 0.95,
                                        }}
                                        className={cx('title-box')}
                                    >
                                        <span className={cx('title')}>
                                            {menu.title}
                                        </span>
                                    </motion.div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className={cx('sns-box')}>
                        {snsState.map(sns => (
                            <Link key={sns.id} href={sns.href}>
                                <a target="_blank">
                                    <div className={cx('sns-item')}>
                                        <div
                                            className={cx(
                                                'icon',
                                                `${sns.style}`,
                                            )}
                                        ></div>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;

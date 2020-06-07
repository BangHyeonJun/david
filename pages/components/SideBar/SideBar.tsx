import React from 'react';
import Link from 'next/link';

// className={cx("title")} 아이콘

// 컨텍스트
import { useSideBarsState } from '../../contexts/SideBarContext';

// 스타일
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
const cx = classNames.bind(styles);

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
                    <div className={cx('menu-item', 'active')}>
                        <div className={cx('icon', 'home')}></div>
                        <span className={cx('title')}>HOME</span>
                    </div>
                    <div className={cx('menu-item')}>
                        <div className={cx('icon', 'about')}></div>
                        <span className={cx('title')}>ABOUT</span>
                    </div>
                    <div className={cx('menu-item')}>
                        <div className={cx('icon', 'history')}></div>
                        <span className={cx('title')}>HISTORY</span>
                    </div>
                    <div className={cx('menu-item')}>
                        <div className={cx('icon', 'blog')}></div>
                        <span className={cx('title')}>BLOG</span>
                    </div>
                    <div className={cx('menu-item')}>
                        <div className={cx('icon', 'contact')}></div>
                        <span className={cx('title')}>CONTACT</span>
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

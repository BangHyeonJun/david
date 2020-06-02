import React from 'react';
import Link from 'next/link';

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
            <div className={cx('container')}>
                <span>테스트</span>
                <span>테스트</span>
                <span>테스트</span>
            </div>
        </div>
    );
}

export default SideBar;

import React from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrap')}>
            <Link href="/">
                <a>홈</a>
            </Link>
            <Link href="/blog">
                <a>블로그</a>
            </Link>
        </div>
    );
}

export default Header;

import React from 'react';
import Header from './Header/Header';
import classNames from 'classnames/bind';

import styles from './Layout.module.scss';
const cx = classNames.bind(styles);

const Layout = props => (
    <div className={cx('wrap')}>
        <Header />
        {props.children}
    </div>
);

export default Layout;

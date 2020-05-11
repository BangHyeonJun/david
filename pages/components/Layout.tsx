import React from 'react';
import Header from './Header/Header';
import classNames from 'classnames/bind';

// 컴포넌트
import PrevButton from './SideButton/PrevButton';
import NextButton from './SideButton/NextButton';

// 스타일
import styles from './Layout.module.scss';
const cx = classNames.bind(styles);

const Layout = props => (
    <div className={cx('wrap')}>
        <Header />
        <PrevButton></PrevButton>
        {props.children}
        <NextButton></NextButton>
    </div>
);

export default Layout;

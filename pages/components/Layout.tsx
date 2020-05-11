import React from 'react';
import Header from './Header/Header';
import classNames from 'classnames/bind';

// 컴포넌트
import PrevButton from './SideButton/PrevButton';
import NextButton from './SideButton/NextButton';

// 스타일
import styles from './Layout.module.scss';
const cx = classNames.bind(styles);

type LayoutProps = {
    children: React.ReactNode;
    prevLink: string;
    nextLink: string;
};

function Layout({ children, prevLink, nextLink }: LayoutProps) {
    return (
        <div className={cx('wrap')}>
            <Header />
            <PrevButton href={prevLink}></PrevButton>
            {children}
            <NextButton href={nextLink}></NextButton>
        </div>
    );
}

export default Layout;

import React from 'react';
import classNames from 'classnames/bind';

// 컴포넌트
import SideBar from './SideBar/SideBar';

// 컨텍스트
import { SideBarsContextProvider } from '../contexts/SideBarContext';

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
        <SideBarsContextProvider>
            <div className={cx('wrap')}>
                {/* TODO : 맨 끝 이상으로 가면 더이상 가지지 않게 수정 */}
                {/* <PrevButton href={prevLink}></PrevButton> */}

                <div className={cx('sidebar-wrap')}>
                    <SideBar></SideBar>
                </div>
                <div className={cx('contents-wrap')}>{children}</div>
                {/* TODO : 맨 끝 이상으로 가면 더이상 가지지 않게 수정 해야함 */}
                {/* <NextButton href={nextLink}></NextButton> */}
            </div>
        </SideBarsContextProvider>
    );
}

export default Layout;

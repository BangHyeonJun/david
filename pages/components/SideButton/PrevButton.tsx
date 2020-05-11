import React from 'react';
import Link from 'next/link';

// 스타일
import classNames from 'classnames/bind';
import styles from './PrevButton.module.scss';
const cx = classNames.bind(styles);

function PrevButton({ href }: { href: string }) {
    return (
        <div className={cx('wrap')}>
            <Link href={href}>
                <button className={cx('arrowBtnBox')}>
                    <img src={'/img/prev-button.svg'}></img>
                </button>
            </Link>
        </div>
    );
}

export default PrevButton;

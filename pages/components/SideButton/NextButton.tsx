import React from 'react';

// 스타일
import classNames from 'classnames/bind';
import styles from './NextButton.module.scss';
const cx = classNames.bind(styles);

function NextButton() {
    return (
        <div className={cx('wrap')}>
            <button className={cx('arrowBtnBox')}>
                <img src={'/img/next-button.svg'}></img>
            </button>
        </div>
    );
}

export default NextButton;

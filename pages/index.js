import React from 'react';
import Head from 'next/head';

// 스타일
import classNames from 'classnames/bind';
import styled from './index.module.scss';
const cx = classNames.bind(styled);

// 컴포넌트

export default function Home() {
    return <div className={cx('test')}>테스트</div>;
}

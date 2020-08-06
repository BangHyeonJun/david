import React, { useState, useCallback, useEffect } from 'react';

import Layout from './components/Layout/Layout';

import { motion } from 'framer-motion';

// 스타일
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
const cx = classNames.bind(styles);

// 유틸
import useWindowSize from './utils/resize';

type TitleArrType = {
    title: string[];
    active: boolean;
};

function Contact() {
    const [titleArr, setTitleArr] = useState<TitleArrType[]>([
        {
            title: [
                'Thank you for watching me',
                'do you want to know about me more?',
            ],
            active: true,
        },
        {
            title: ['봐주셔서 감사합니다', '혹시 저를 좀 더 알고 싶다면?'],
            active: false,
        },
        {
            title: [
                '見てくれてありがとうございます。',
                'もし私をもっと知りたければ?',
            ],
            active: false,
        },
    ]);

    const moveTitle = () => {
        let activeIndex = 0;
        console.log(titleArr);
        titleArr.some((title, idx) => {
            if (title.active) {
                if (titleArr.length - 1 === idx) {
                    activeIndex = 0;
                    return true;
                }
                activeIndex = idx + 1;
                return true;
            }
            return false;
        });
        // console.log(activeIndex);
        setTitleArr(old =>
            old.map((title, idx) => ({
                ...title,
                active: activeIndex === idx,
            })),
        );
    };

    useEffect(() => {
        setTimeout(() => {
            moveTitle();
        }, 5000);
        return () => {};
    }, []);

    useEffect(() => {
        setTimeout(() => {
            moveTitle();
        }, 5000);
        console.log('변함', titleArr);
    }, [titleArr]);

    return (
        <Layout title={'CONTACT'}>
            <div className={cx('title-wrap')}>
                {titleArr.map((title, idx) => (
                    <div
                        key={parseInt(idx.toString(), 16)}
                        className={cx('title-box', { active: title.active })}
                    >
                        <span>{title.title[0]}</span>
                        <span>{title.title[1]}</span>
                    </div>
                ))}
            </div>
            <div>please click this</div>
            {/* <motion.div
                animate={{ opacity: 1, backgroundColor: '#84B1ED' }}
                initial={{ opacity: 1, backgroundColor: '#000000' }}
                className={cx('wrap')}
            >
                <motion.div
                    animate={{ x: 0, opacity: 1 }}
                    initial={{ x: 60, opacity: 0 }}
                    className={cx('cardWrap')}
                >
                    <h1>내 소개</h1>
                </motion.div>
            </motion.div> */}
        </Layout>
    );
}

export default Contact;

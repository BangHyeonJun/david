import React from 'react';

import Layout from './components/Layout/Layout';

import { motion } from 'framer-motion';

function Blog() {
    return (
        <Layout>
            <div>블로그 </div>
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

export default Blog;

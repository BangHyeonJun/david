import React from 'react';

import Layout from './components/Layout';

import { motion } from 'framer-motion';

function blog() {
    return (
        <Layout prevLink={'/'} nextLink={'/blog'}>
            <motion.div
                animate={{ x: 60, opacity: 1 }}
                initial={{ x: 0, opacity: 0 }}
                className="title"
            >
                <h1>내 블로그 소개</h1>
            </motion.div>
        </Layout>
    );
}

export default blog;

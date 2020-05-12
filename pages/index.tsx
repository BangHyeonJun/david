import React from 'react';
import Link from 'next/link';

// 스타일

// 컴포넌트
import Layout from './components/Layout';
import { motion } from 'framer-motion';

function Index() {
    return (
        <Layout prevLink={'/'} nextLink={'/blog'}>
            <motion.div
                animate={{ x: 60, opacity: 1 }}
                initial={{ x: 0, opacity: 0 }}
                className="title"
            >
                <h1>내 소개</h1>
            </motion.div>
        </Layout>
    );
}

export default Index;

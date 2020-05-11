import React from 'react';

import Layout from './components/Layout';

import { motion } from 'framer-motion';

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing },
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
        },
    },
};

function blog() {
    return (
        <Layout prevLink={'/'} nextLink={'/blog'}>
            <motion.div
                animate={{ x: 60, opacity: 1 }}
                initial={{ x: 0, opacity: 0 }}
                className="title"
            >
                <h1>블로그</h1>
            </motion.div>
        </Layout>
    );
}

export default blog;

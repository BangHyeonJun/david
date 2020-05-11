import React from 'react';
import Link from 'next/link';

// 스타일

// 컴포넌트
import Layout from './components/Layout';
import { motion } from 'framer-motion';

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
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

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// const ProfileLink = props => (
//     <div>
//         <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
//             <a>Go to {props.profile}'s profile</a>
//         </Link>
//     </div>
// );

function Index() {
    return (
        <Layout>
            <motion.div
                animate={{ x: 60, opacity: 1 }}
                initial={{ x: 0, opacity: 0 }}
                className="title"
            >
                <h1>Friends List</h1>
            </motion.div>
            {/* <ProfileLink name="jake" />
            <ProfileLink name="peter" />
            <ProfileLink name="yumi" /> */}
        </Layout>
    );
}

export default Index;

import React from 'react';
import Header from './components/Header';
import { useRouter } from 'next/router';

// 컴포넌트
import Layout from './components/Layout';

export default function Profile() {
    const router = useRouter();
    return (
        <Layout>
            <p>Hello, my name is {router.query.profile}. I use Next.js</p>
        </Layout>
    );
}

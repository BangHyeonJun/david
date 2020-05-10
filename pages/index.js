import React from 'react';
import Link from 'next/link';

// 스타일

// 컴포넌트
import Layout from './components/Layout';

const ProfileLink = props => (
    <div>
        <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
            <a>Go to {props.profile}'s profile</a>
        </Link>
    </div>
);

function Index() {
    return (
        <Layout>
            <h1>Friends List</h1>
            <ProfileLink name="jake" />
            <ProfileLink name="peter" />
            <ProfileLink name="yumi" />
        </Layout>
    );
}

export default Index;

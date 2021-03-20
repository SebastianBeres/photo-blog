import Head from 'next/head';
import { useState } from 'react';

import Hello from '@/components/ui/Hello';

const Home = () => {
    const [status, setStatus] = useState(false);

    return (
        <div>
            <Head>
                <title>Create Next App</title>
            </Head>

            <main>
                <div className="flex items-center justify-center h-screen">
                    <Hello onClick={() => setStatus(!status)} status={status}>
                        Hello World
                    </Hello>
                </div>
            </main>
        </div>
    );
}

export default Home;

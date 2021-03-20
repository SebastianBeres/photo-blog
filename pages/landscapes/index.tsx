import Head from 'next/head';
import Hello from '@/components/ui/Hello';

const LandscapesPage = () => {
    return (<div>
        <Head>
            <title>Landscape</title>
        </Head>
        <main>
            <div className="flex items-center justify-center h-screen">
                <Hello>
                    Landscapes
                </Hello>
            </div>
        </main>
    </div>)
}

export default LandscapesPage

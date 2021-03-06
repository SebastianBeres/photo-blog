import '@/assets/styles/globals.css';
import { AppProps } from 'next/app';
import { FC } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default MyApp;

import Head from 'next/head';
import { PageTransition } from 'next-page-transitions';
import { ThemeProvider } from 'styled-components';

// eslint-disable-next-line import/order
import { theme } from '../styles/theme';

// COMPONENTS
import Layout from '../layout';
import Loader from '../components/loader';

const TIMEOUT = 400;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>my website</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <PageTransition
            timeout={TIMEOUT}
            classNames="page-transition"
            loadingComponent={<Loader />}
            loadingDelay={500}
            loadingTimeout={{
              enter: TIMEOUT,
              exit: 0
            }}
            loadingClassNames="loading-indicator"
          >
            <Component {...pageProps} />
          </PageTransition>
        </Layout>
      </ThemeProvider>
      <style jsx global>{`
        @font-face {
          font-family: 'Manrope';
          src: url('/fonts/Manrope/Manrope-Bold.ttf');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Manrope';
          src: url('/fonts/Manrope/Manrope-ExtraBold.ttf');
          font-weight: extrabold;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Manrope';
          src: url('/fonts/Manrope/Manrope-Medium.ttf');
          font-weight: medium;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Manrope';
          src: url('/fonts/Manrope/Manrope-SemiBold.ttf');
          font-weight: semibold;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Manrope';
          src: url('/fonts/Manrope/Manrope-Regular.ttf');
          font-weight: regular;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'MonumentExtended';
          src: url('/fonts/MonumentExtended/MonumentExtended-Regular.otf');
          font-weight: regular;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'MonumentExtended';
          src: url('/fonts/MonumentExtended/MonumentExtended-Ultrabold.otf');
          font-weight: ultrabold;
          font-style: normal;
          font-display: swap;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          color: ${({ theme }) => theme.colors.primary};
          background-color: white;
        }

        * {
          box-sizing: border-box;
        }
        .page-transition-enter {
          opacity: 0;
          transform: translate3d(0, 20px, 0);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity ${TIMEOUT}ms;
        }
        .loading-indicator-appear,
        .loading-indicator-enter {
          opacity: 0;
        }
        .loading-indicator-appear-active,
        .loading-indicator-enter-active {
          opacity: 1;
          transition: opacity ${TIMEOUT}ms;
        }
      `}</style>
    </>
  );
};

export default MyApp;

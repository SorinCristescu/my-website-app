import { ThemeProvider } from 'styled-components';

// eslint-disable-next-line import/order
import { theme } from '../styles/globals';

// COMPONENTS
import Layout from '../layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;

import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
`;

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link href="/favicons/favicon.ico" rel="icon" />
      </Head>
      <Title>My personal website</Title>
    </div>
  );
};

export default Home;

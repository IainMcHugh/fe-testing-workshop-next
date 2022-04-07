import type { NextPage } from 'next';
import Head from 'next/head';
import { Main, H1, A, Wrapper } from '../styles';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>FE testing workshop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Wrapper>
          <H1>FE testing workshop</H1>
          <A href="/form_a">Form A</A>
          <A href="/form_b">Form B</A>
        </Wrapper>
      </Main>
    </div>
  );
};

export default Home;

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { A, P, Footer } from '../styles';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer>
        <P>FE Testing workshop</P>
        <Link href={'/form_a'} passHref>
          <A>Go to Form A</A>
        </Link>
        <Link href={'/form_b'} passHref>
          <A>Go to Form B</A>
        </Link>
      </Footer>
    </>
  );
}

export default MyApp;

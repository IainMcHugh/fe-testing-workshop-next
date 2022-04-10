import type { AppProps } from 'next/app';
import Script from 'next/script';

import { A, P, Footer } from '../styles';
import Link from 'next/link';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossOrigin="anonymous"
      />
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

import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import GetServerSidePropsExample from '../../components/getserversidepropsexample';

export default function FirstPost() {
  return (
    <>
    <Head>
      <title>First sample</title>
    </Head>
    <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
        {/* <img src='/images/profile.jpg' alt='Pavi' /> */}
      </h2>
      <GetServerSidePropsExample />
    </>
  );
}

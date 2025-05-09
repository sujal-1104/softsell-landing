// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      
        <meta name="description" content="Sell your unused software licenses instantly with SoftSell." />
        <meta property="og:title" content="SoftSell - Sell Unused Software" />
        <meta property="og:description" content="Get instant quotes and fast payment for old software licenses." />
        <meta property="og:image" content="/logo.png" />
        <title>SoftSell | Resell Your Software Licenses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

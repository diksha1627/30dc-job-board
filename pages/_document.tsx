import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="/clarity.js" defer />
        <script src="../path/to/flowbite/dist/flowbite.min.js" defer />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

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
        <script src="/clarity.js" defer />
        <script src="../path/to/flowbite/dist/flowbite.min.js" defer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"defer/>

        <NextScript/>
      </body>
    </Html>
  )
}

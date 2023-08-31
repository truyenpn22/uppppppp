import Menu from '@/components/Menu'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <main className='w-full'>
          <Menu />
          <Main />
          <NextScript />
        </main>
      </body>
    </Html>
  )
}

// import "../styles/globals.css"

import Layout from "../components/layout";
import NewLayout from "../components/newlayout";
import { Inter, Roboto } from '@next/font/google'
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin']
})

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Layout>
      <NewLayout >
        <main className={`${inter.variable} font-sans`}>
          <SessionProvider session={session} >
            <Component {...pageProps} />
          </SessionProvider>
        </main>
      </NewLayout>
    </Layout>
  )
}

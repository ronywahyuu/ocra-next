import MainLayout from "@/components/layout/MainLayout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <SessionProvider>
      <>
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
        </Head>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </>
    </SessionProvider>
  );
}

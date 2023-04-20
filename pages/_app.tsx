import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";
import { CssBaseline, Box, ThemeProvider } from "@mui/material";
import theme from '../styles/theme';
import FooterMap from '@components/ui/footer-map';
import Navbar from '@components/ui/navbar';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps: { session, user, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <meta name="yandex-verification" content="c03a706de49b32fd" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Бесплатные спортивные секции на ВДНХ"
        />
        <meta property="og:title" content="Физкультура и спорт на ВДНХ" />
        <meta
          property="og:description"
          content="Московский спорт предлагает вашему вниманию бесплатные спортивные секции в рамках проекта Физкультура и спорт на ВДНХ"
        />
        <meta property="og:url" content="https://fizkult.moscow.sport/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/razmetka.jpg" />

        <title>Физкультура и спорт на ВДНХ</title>
      </Head>
      <Script
        id="id"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
         
            ym(88822619, "init", {
                 clickmap:true,
                 trackLinks:true,
                 accurateTrackBounce:true
            });
          `,
        }}
      />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SessionProvider session={session}>
          <Navbar />

          <Component {...pageProps} />
          <FooterMap />
        </SessionProvider>
      </Box>
    </ThemeProvider>
  )

}

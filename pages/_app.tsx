import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";
import { CssBaseline, Box, ThemeProvider } from "@mui/material";
import theme from '../styles/theme';
import FooterMap from '@components/ui/footer-map';

export default function App({ Component, pageProps: { session, user, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SessionProvider session={session}>
          <Component {...pageProps} />
          <FooterMap />
        </SessionProvider>
      </Box>
    </ThemeProvider>
  )

}

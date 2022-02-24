import { ThemeProvider } from '@theme-ui/core';
import { AppProps } from 'next/app';
import theme from '../lib/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

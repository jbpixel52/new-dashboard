import { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
export default function MyApp({ Component, pageProps }: AppProps) {

  return(<ThemeProvider theme={darkTheme}>
    <main><Component {...pageProps} /></main>
    </ThemeProvider>
    )}
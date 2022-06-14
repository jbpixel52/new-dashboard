import { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material/';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
export default function MyApp({ Component, pageProps }: AppProps) {

  return(<ThemeProvider theme={darkTheme}>
          <CssBaseline/>

    <main><Component {...pageProps} /></main>
    </ThemeProvider>
    )}
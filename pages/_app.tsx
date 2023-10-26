import '../styles/global.scss';
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from '../hooks/Context/AppContext';

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <AppProvider><Component {...pageProps} /></AppProvider>
  )
}

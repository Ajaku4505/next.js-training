import '../styles/globals.css';
import TopLayout from '../layouts/toppage';

function MyApp({ Component, pageProps }) {
  return <TopLayout>
   <Component {...pageProps} />
  </TopLayout>
}

export default MyApp

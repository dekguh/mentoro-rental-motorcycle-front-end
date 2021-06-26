import 'reset-css';
import Layout from '../components/utils/Layout';
import { wrapper } from '../components/utils/redux/store';
import '../styles/scss/main.scss';

function MyApp({ Component, pageProps }) {
  return (<Layout>
    <Component {...pageProps} />
  </Layout>)
}

export default wrapper.withRedux(MyApp)
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import store from '@/store/reducers';
import { Provider } from 'react-redux';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default App;

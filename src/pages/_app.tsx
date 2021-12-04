import type { AppProps } from 'next/app';
import store from '@/store/reducers';
import { Provider } from 'react-redux';
import '@/styles/globals.css';
import 'tailwindcss/tailwind.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default App;

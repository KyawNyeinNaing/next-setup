import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import store from '@/store/reducers';
import { Provider } from 'react-redux';
import '@/styles/globals.css';
import 'tailwindcss/tailwind.css';
import { color, font } from '@/components/LV1';

const theme = {}; // General styles for the entire service are defined here.

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={color}>
        <ThemeProvider theme={font}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeProvider>
    </ThemeProvider>
  </Provider>
);

export default App;

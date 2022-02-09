import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import createEmotionCache from '@style/create-emotion-cache';
import theme from '@style/theme';
import { AppPropertiesWithLayout } from '@type/global';
import Head from 'next/head';
import { ReactElement, ReactNode, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(
  properties: AppPropertiesWithLayout
): ReactElement {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps
  } = properties;
  const [queryClient] = useState(() => new QueryClient());

  // const cacheRtl = createCache({
  //   key: 'muirtl',
  //   stylisPlugins: [prefixer, rtlPlugin]
  // });

  const cache = createCache({
    key: 'root',
    prepend: true
  });

  const getLayout =
    Component.getLayout ?? ((page: ReactElement): ReactNode => page);

  return (
    <RecoilRoot>
      <Head>
        <title>Mui example</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <CacheProvider value={emotionCache}>
            <CacheProvider value={cache}>
              {/* <CacheProvider value={cacheRtl}> */}
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
              </ThemeProvider>
              {/* </CacheProvider> */}
            </CacheProvider>
          </CacheProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

import Head from 'next/head';
import { MantineProvider, NormalizeCSS, GlobalStyles } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ReactElement, ReactNode, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import { AppPropertiesWithLayout } from '@type/global';

export default function App(props: AppPropertiesWithLayout): ReactElement {
  const { Component, pageProps } = props;
  const [queryClient] = useState(() => new QueryClient());
  const getLayout =
    Component.getLayout ?? ((page: ReactElement): ReactNode => page);

  return (
    <RecoilRoot>
      <Head>
        <title>Mantine next example</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <MantineProvider
            theme={{
              /** Put your mantine theme override here */
              colorScheme: 'light'
            }}
          >
            <NormalizeCSS />
            <GlobalStyles />
            <NotificationsProvider>
              {getLayout(<Component {...pageProps} />)}
            </NotificationsProvider>
          </MantineProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

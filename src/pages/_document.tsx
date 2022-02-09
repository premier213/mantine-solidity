import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '@style/create-emotion-cache';
import theme from '@style/theme';
import { DocumentInitialProperties } from '@type/global';
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          {/* PWA primary color */}
          <meta name='theme-color' content={theme.palette.primary.main} />
          <link rel='icon' href='/static/favicon.ico' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (
  context: DocumentContext
): Promise<DocumentInitialProperties> => {
  const originalRenderPage = context.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  context.renderPage = ():
    | DocumentInitialProperties
    | Promise<DocumentInitialProperties> =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(properties) {
          return <App emotionCache={cache} {...properties} />;
        }
    });

  const initialProperties = await Document.getInitialProps(context);
  const emotionStyles = extractCriticalToChunks(initialProperties.html);
  const emotionStyleTags = emotionStyles.styles.map(style => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProperties,
    emotionStyleTags
  };
};

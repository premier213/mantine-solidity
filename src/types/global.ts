import { EmotionCache } from '@emotion/react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { RenderPageResult } from 'next/dist/shared/lib/utils';
import { ReactElement, ReactNode } from 'react';

export declare type DocumentInitialProperties = RenderPageResult & {
  styles?: React.ReactElement[] | React.ReactFragment;
  emotionStyleTags?: EmotionJSX.Element[];
};
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
export type AppPropertiesWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

export type PropertiesChildren = {
  children: ReactNode;
};
export interface Children {
  children?: ReactElement;
  page?: ReactElement;
}

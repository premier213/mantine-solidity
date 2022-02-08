import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
export type AppPropertiesWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type PropertiesChildren = {
  children: ReactNode;
};
export interface Children {
  children?: ReactElement;
  page?: ReactElement;
}

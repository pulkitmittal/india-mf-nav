import Head from 'next/head';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
  showHomeLink?: boolean;
};

const Layout = ({ children, title, showHomeLink }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
    {showHomeLink && (
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    )}
  </div>
);

export default Layout;

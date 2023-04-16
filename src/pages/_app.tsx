
import React, { useEffect, useState } from 'react';
import { Layout } from '@/Components';
import '@/styles/globals.scss';
import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

import { Metadata } from 'next';
import { ReactNode } from 'react';
import Header from './_components/Header';

interface Props {
  children: ReactNode;
}

const siteName = 'AR Quick Look for VisionPro';
const description = 'This site is a demo of AR Quick Look for VisionPro';
const url = 'https://arquicklook-vision-os.vercel.app/';

export const metadata: Metadata = {
  title: siteName,
  description: description,
  applicationName: siteName,
  authors: [
    {
      name: 'kanakanho',
      url: 'https://github.com/kanakanho',
    },
    {
      name: 'harutiro',
      url: 'https://github.com/harutiro',
    },
  ],
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: siteName,
    description,
    site: '@Shiba_ao_',
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <Header />
        {children}
      </body>
    </html>
  );
}

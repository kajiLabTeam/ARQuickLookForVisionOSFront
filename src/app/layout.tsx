import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

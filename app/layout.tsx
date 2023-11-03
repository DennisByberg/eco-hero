import type { Metadata } from 'next';
import './globals.scss';
import { useFontPoppins } from './fonts';
import './globals.scss';
import { Analytics } from '@vercel/analytics/react';
import { Theme, ThemePanel } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: 'Eco Hero',
  description: 'A game to save the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={useFontPoppins.className}>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.scss';
import { useFontPoppins } from './fonts';
import './globals.scss';
import NavBar from './components/NavBar/NavBar';
import { Analytics } from '@vercel/analytics/react';

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
        <NavBar />
        <main>
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}

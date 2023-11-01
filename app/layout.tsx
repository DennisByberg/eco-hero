import type { Metadata } from 'next';
import './globals.scss';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { Inter } from 'next/font/google';
import './globals.scss';
import NavBar from './components/NavBar/NavBar';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <Theme style={{ background: 'black', color: 'white' }}>
          <NavBar />
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}

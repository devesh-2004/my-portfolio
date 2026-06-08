import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Devesh Purohit | Portfolio',
  description: 'Full Stack Developer & Problem Solver',
};

import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body suppressHydrationWarning className={`${spaceGrotesk.className} bg-[#0a0a0c] text-white antialiased overflow-x-hidden`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

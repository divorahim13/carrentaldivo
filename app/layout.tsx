import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'E-car | Let\'s Ride The Future',
  description: 'Premium car rental service for the future of mobility.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased bg-[#f3f4f6] text-slate-900">{children}</body>
    </html>
  );
}

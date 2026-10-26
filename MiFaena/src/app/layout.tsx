import './globals.css';
import type { Metadata } from 'next';
import { siteName, siteDescription } from '../lib/brand';

export const metadata: Metadata = {
  title: `${siteName} - ${siteDescription}`,
  description: siteDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-50 text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
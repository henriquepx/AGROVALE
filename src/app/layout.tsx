import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import './sass/main.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Agrovale Importação e Exportação",
  description: "-",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}

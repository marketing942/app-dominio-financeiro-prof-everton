import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domínio Financeiro",
  description: "Aplicativo de gestão financeira pessoal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}

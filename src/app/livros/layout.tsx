import type { Metadata } from "next";
import MenuComponente from "../_componentes/menu/componente";
import "../globals.css";

export const metadata: Metadata = {
  title: "Good Reader - Livraria on-line",
  description: "Confira o nosso grande acervo de livros e encontre o que está procurando agora!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <MenuComponente />
        <div className="content">
            {children}
        </div>
      </body>
    </html>
  );
}

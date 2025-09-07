import type { Metadata } from "next";
import "./globals.css";
import MenuComponente from "./_componentes/menu/componente";
import FooterComponente from "./_componentes/footer/componente";

export const metadata: Metadata = {
  title: "Good Reader - Admin",
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
        <div className="layoutGrid">
          <MenuComponente />
          <div>
            <div className="conteudoPage">
              {children}
            </div>
            <FooterComponente />
          </div>
        </div>
      </body>
    </html>
  );
}

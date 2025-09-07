import { redirect } from "next/navigation";

export default function LivrosPage(){
  return (
    <>
      <div className="cabecalhoPage">
        <div className="descricao">
          <h2 className="titlePage">Livros</h2>
          <p className="descriptionPage">Confira abaixo as informações de todos os livros cadastrados no sistema.</p>
        </div>
        <div className="acao"></div>
      </div>
    </>
  )
}
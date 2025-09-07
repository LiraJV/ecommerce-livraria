import "./style.css"
import CardLivro from "../_componentes/livros/cardLivro/componente"

export default function LivrosPage(){
    return(
        <>
            <div className="flex flex-row items-center justify-between p-10 h-full">
                <div className="filtros w-1/3 bg-white h-full p-5 rounded-md">
                    <h3 className="text-2xl font-bold">Filtros</h3>
                    <p>Refine a sua busca e encontre o que está procurado.</p>
                    <form action="" className="formFiltros">
                        <div className="itemForm">
                            <label htmlFor="autor">Autor:</label>
                            <input type="text" name="autor" id="autor" />
                        </div>
                        <div className="itemForm">
                            <label htmlFor="categoria">Categoria:</label>
                            <select name="categoria" id="categoria">
                                <option value="">Selecione uma categoria</option>
                                <option value="Romance">Romance</option>
                                <option value="Ação">Ação</option>
                                <option value="Aventura">Aventura</option>
                                <option value="Suspense">Suspense</option>
                                <option value="Técnico">Técnico</option>
                            </select>
                        </div>
                        <div className="itemForm">
                            <label htmlFor="titulo">Título:</label>
                            <input type="text" name="titulo" id="titulo" />
                        </div>
                        <div className="itemForm">
                            <label htmlFor="editora">Editora:</label>
                            <input type="text" name="editora" id="editora" />
                        </div>
                        <div className="itemForm">
                            <label htmlFor="isbn">ISBN:</label>
                            <input type="text" name="isbn" id="isbn" />
                        </div>
                        <button type="submit">
                            Pesquisar
                        </button>
                    </form>
                </div>
                <div className="listagem flex flex-col w-3/5 bg-white h-full p-5 rounded-md overflow-auto">
                    <h3 className="text-2xl font-bold">Livros</h3>
                    <p className="mb-4">Confira abaixo o grande acervo de livros que temos disponível para você.</p>
                    <div className="livros grid grid-cols-4 gap-4">
                        <CardLivro/>
                        <CardLivro/>
                        <CardLivro/>
                        <CardLivro/>
                        <CardLivro/>
                        <CardLivro/>
                        <CardLivro/>
                        <CardLivro/>
                        <CardLivro/>
                        <CardLivro/>
                        <CardLivro/>
                        <CardLivro/>
                    </div>
                </div>
            </div>
        </>
    )
}
import Link from "next/link";

export default function AlterarCartaoPage(){
    return (
        <>
            <div className="cabecalhoPage">
                <div className="descricao">
                    <h2 className="titlePage">Alterar cartão</h2>
                    <p className="descriptionPage">Preencha as informações abaixo e altere as informações do cartão do cliente.</p>
                </div>
                <div className="acao"></div>
            </div>
            <form action="">
                <h2>Dados do cartão</h2>
                <div className="formGroup">
                    <div className="formInput pr-1.5">
                        <input type="text" name="numero" id="numero" placeholder='Digite o número do cartão *' />
                    </div>
                    <div className="formInput pr-1.5">
                        <input type="text" name="nome" id="nome" placeholder='Digite o nome no cartão *' />
                    </div>
                    <div className="formInput pr-1.5">
                        <select name="bandeira" id="bandeira">
                            <option>Selecione a bandeira do cartão</option>
                            <option value="Visa">Visa</option>
                            <option value="MasterCard">MasterCard</option>
                            <option value="Elo">Elo</option>
                        </select>
                    </div>
                    <div className="formInput">
                        <input type="text" name="codigo" id="codigo" placeholder='Digite o código do cartão *' />
                    </div>
                </div>
                <div className="formGroup">
                    <div className="formInput pr-1.5">
                        <select name="bandeira" id="bandeira">
                            <option>Selecione a classificação do cartão</option>
                            <option value="Visa">Principal</option>
                            <option value="MasterCard">Adicional</option>
                        </select>
                    </div>
                </div>
                <Link href="/admin/clientes/cartoes" className="btnSubmit">
                    Salvar
                </Link>
            </form>
        </>
    );
}
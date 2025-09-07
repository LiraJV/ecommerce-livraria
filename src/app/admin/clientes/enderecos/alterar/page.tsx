import Link from "next/link";

export default function AlterarEnderecoPage(){
    return (
        <>
            <div className="cabecalhoPage">
                <div className="descricao">
                    <h2 className="titlePage">Alterar endereco</h2>
                    <p className="descriptionPage">Preencha as informações abaixo e altere o endereço do cliente.</p>
                </div>
                <div className="acao"></div>
            </div>
            <form action="">
                <h2>Informações do endereço</h2>
                <div className="formGroup">
                    <div className="formInput pr-1.5">
                        <input type="text" name="tipoResidencia" id="tipoResidencia" placeholder='Digite o tipo da residencia *' />
                    </div>
                    <div className="formInput pr-1.5">
                        <input type="text" name="tipoLogradouro" id="tipoLogradouro" placeholder='Digite o tipo do lograoduro *' />
                    </div>
                    <div className="formInput pr-1.5">
                        <input type="text" name="logradouro" id="logradouro" placeholder='Digite o lograoduro *' />
                    </div>
                    <div className="formInput">
                        <input type="number" name="numero" id="numero" placeholder='Digite o número *' />
                    </div>
                </div>
                <div className="formGroup">
                    <div className="formInput pr-1.5">
                        <input type="text" name="bairro" id="bairro" placeholder='Digite o bairro *' />
                    </div>
                    <div className="formInput pr-1.5">
                        <input type="text" name="cep" id="cep" placeholder='Digite o CEP *' />
                    </div>
                    <div className="formInput pr-1.5">
                        <input type="text" name="cidade" id="cidade" placeholder='Digite a cidade *' />
                    </div>
                    <div className="formInput">
                        <input type="text" name="estado" id="estado" placeholder='Digite o estado *' />
                    </div>
                </div>
                <div className="formGroup">
                    <div className="formInput pr-1.5">
                        <input type="text" name="pais" id="pais" placeholder='Digite o pais *' />
                    </div>
                    <div className="formInput pr-1.5">
                        <select name="classificacao" id="classificacao">
                            <option>Selecione a classificação do endereço:</option>
                            <option value="">Endereço de entrega</option>
                            <option value="">Endereço de cobrança</option>
                            <option value="">Endereço adicional</option>
                        </select>
                    </div>
                </div>
                <div className="formgroup">
                    <div className="formInput pr-1.5">
                        <textarea name="observacoes" id="observacoes" placeholder='Digite as observacoes'></textarea>
                    </div>
                </div>
                <Link href="/admin/clientes/enderecos" className="btnSubmit">
                    Salvar
                </Link>
            </form>
        </>
    );
}
import Link from "next/link";

export default function CadastrarClientePage(){
    return (
        <>
            <div className="cabecalhoPage">
                <div className="descricao">
                    <h2 className="titlePage">Cadastrar Cliente</h2>
                    <p className="descriptionPage">Preencha as informações abaixo e cadastre um novo cliente.</p>
                </div>
                <div className="acao"></div>
            </div>
            <form action="">
                <h2>Informações pessoais:</h2>
                <div className="formGroup">
                    <div className="formInput pr-1.5">
                        <input type="text" name="nome" placeholder="Digite o nome *" />
                    </div>
                    <div className="formInput pr-1.5">
                        <select name="genero" id="genero">
                            <option>Selecione o gênero:</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>
                    </div>
                    <div className="formInput pr-1.5">
                        <input type="date" name="dataNascimento" placeholder="Data de Nascimento *" />
                    </div>
                    <div className="formInput">
                        <input type="text" name="cpf" placeholder="Digite o CPF *" />
                    </div>
                </div>
                <div className="formGroup">
                    <div className="formInput pr-1.5">
                        <input type="text" name="ddd" placeholder="Digite o DDD *" />
                    </div>
                    <div className="formInput pr-1.5">
                        <input type="text" name="telefone" placeholder="Digite o Telefone *" />
                    </div>
                    <div className="formInput pr-1.5">
                        <input type="text" name="email" placeholder="Digite o e-mail *" />
                    </div>
                    <div className="formInput">
                        <input type="text" name="senha" placeholder="Digite a senha" />
                    </div>
                </div>
                <div className="formGroup">
                    <div className="formInput pr-1.5">
                        <input type="text" name="confirmacaoSenha" placeholder="Confirme a senha" />
                    </div>
                </div>
                <h2>Endereço de entrega</h2>
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
                </div>
                <div className="formgroup">
                    <div className="formInput pr-1.5">
                        <textarea name="observacoes" id="observacoes" placeholder='Digite as observacoes'></textarea>
                    </div>
                </div>
                <h2>Endereço de cobrança</h2>
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
                </div>
                <div className="formgroup">
                    <div className="formInput pr-1.5">
                        <textarea name="observacoes" id="observacoes" placeholder='Digite as observacoes'></textarea>
                    </div>
                </div>
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
                <Link href="/admin/clientes" className="btnSubmit">
                    Salvar
                </Link>
            </form>
        </>
    );
}
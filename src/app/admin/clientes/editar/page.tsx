import Link from "next/link";

export default function CadastrarClientePage(){
    return (
        <>
            <div className="cabecalhoPage">
                <div className="descricao">
                    <h2 className="titlePage">Editar Cliente</h2>
                    <p className="descriptionPage">Preencha as informações abaixo e altere as informações do cliente.</p>
                </div>
                <div className="acao"></div>
            </div>
            <form action="">
                <h2>Alterar a senha:</h2>
                <div className="formGroup">
                    <div className="formInput pr-1.5">
                        <input type="text" name="senhaAtual" id="senhaAtual" placeholder='Digite a senha atual' />
                    </div>
                    <div className="formInput pr-1.5">
                        <input type="text" name="senhaNova" id="senhaNova" placeholder='Digite a nova senha' />
                    </div>
                    <div className="formInput pr-1.5">
                        <input type="text" name="confirmacaoSenhaNova" id="confirmacaoSenhaNova" placeholder='Confirme a nova senha' />
                    </div>
                </div>
                <Link href="/admin/clientes" className="btnSubmit mb-4">
                    Alterar Senha
                </Link>
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
                    <div className="formInput">
                        <input type="text" name="email" placeholder="Digite o e-mail *" />
                    </div>
                </div>
                <Link href="/admin/clientes" className="btnSubmit">
                    Salvar
                </Link>
            </form>
        </>
    );
}
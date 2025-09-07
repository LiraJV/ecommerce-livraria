import './style.css';
import Link from 'next/link';

export default function EndrecosPage() {
    return (
        <>
            <div className="cabecalhoPage">
                <div className="descricao">
                    <h2 className="titlePage">Endereços do Cliente</h2>
                    <p className="descriptionPage">Confira abaixo mais informações sobre os endereços cadastrados do cliente.</p>
                </div>
                <div className="acao">
                    <Link href="/admin/clientes/enderecos/cadastrar">Cadastrar</Link>
                </div>
            </div>
            <div className="listEndereco">
                <div className="endereco">
                    <span className='enderecoClassificacao'>Endereço de entrega</span>
                    <p>
                        <span>Tipo Residência:</span> Casa
                    </p>
                    <p>
                        <span>Tipo Logradouro:</span> Rua
                    </p>
                    <p>
                        <span>Logradouro:</span> Rua São João do Carmo
                    </p>
                    <p>
                        <span>Número:</span> 152
                    </p>
                    <p>
                        <span>Bairro:</span> Vila dos Santos
                    </p>
                    <p>
                        <span>CEP:</span> 08699-999
                    </p>
                    <p>
                        <span>Cidade:</span> Mogi das Cruzes
                    </p>
                    <p>
                        <span>Estado:</span> São Paulo
                    </p>
                    <p>
                        <span>Pais:</span> Brasil
                    </p>
                    <p>
                        <span>Observações:</span> Meu endereço pessoal
                    </p>
                    <Link href="/admin/clientes/enderecos/alterar" className='btnSubmit mt-4 mr-4'>Alterar</Link>
                    <Link href="/admin/clientes/enderecos" className='btnSubmit mt-4'>Excluir</Link>
                </div>
                <div className="endereco">
                    <span className='enderecoClassificacao'>Endereço de cobrança</span>
                    <p>
                        <span>Tipo Residência:</span> Casa
                    </p>
                    <p>
                        <span>Tipo Logradouro:</span> Rua
                    </p>
                    <p>
                        <span>Logradouro:</span> Rua São João do Carmo
                    </p>
                    <p>
                        <span>Número:</span> 152
                    </p>
                    <p>
                        <span>Bairro:</span> Vila dos Santos
                    </p>
                    <p>
                        <span>CEP:</span> 08699-999
                    </p>
                    <p>
                        <span>Cidade:</span> Mogi das Cruzes
                    </p>
                    <p>
                        <span>Estado:</span> São Paulo
                    </p>
                    <p>
                        <span>Pais:</span> Brasil
                    </p>
                    <p>
                        <span>Observações:</span> Meu endereço pessoal
                    </p>
                    <Link href="/admin/clientes/enderecos/alterar" className='btnSubmit mt-4 mr-4'>Alterar</Link>
                    <Link href="/admin/clientes/enderecos" className='btnSubmit mt-4'>Excluir</Link>
                </div>
                <div className="endereco">
                    <span className='enderecoClassificacao'>Endereço adicional</span>
                    <p>
                        <span>Tipo Residência:</span> Casa
                    </p>
                    <p>
                        <span>Tipo Logradouro:</span> Rua
                    </p>
                    <p>
                        <span>Logradouro:</span> Rua São João do Carmo
                    </p>
                    <p>
                        <span>Número:</span> 152
                    </p>
                    <p>
                        <span>Bairro:</span> Vila dos Santos
                    </p>
                    <p>
                        <span>CEP:</span> 08699-999
                    </p>
                    <p>
                        <span>Cidade:</span> Mogi das Cruzes
                    </p>
                    <p>
                        <span>Estado:</span> São Paulo
                    </p>
                    <p>
                        <span>Pais:</span> Brasil
                    </p>
                    <p>
                        <span>Observações:</span> Meu endereço pessoal
                    </p>
                    <Link href="/admin/clientes/enderecos/alterar" className='btnSubmit mt-4 mr-4'>Alterar</Link>
                    <Link href="/admin/clientes/enderecos" className='btnSubmit mt-4'>Excluir</Link>
                </div>
            </div>
        </>
    )
}
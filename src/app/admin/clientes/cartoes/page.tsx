import './style.css';
import Link from 'next/link';

export default function CartoesPage() {
    return (
        <>
            <div className="cabecalhoPage">
                <div className="descricao">
                    <h2 className="titlePage">Cartões do Cliente</h2>
                    <p className="descriptionPage">Confira abaixo mais informações sobre os cartões cadastrados do cliente.</p>
                </div>
                <div className="acao">
                    <Link href="/admin/clientes/cartoes/cadastrar">Cadastrar</Link>
                </div>
            </div>
            <div className="listCartoes">
                <div className="cartao">
                    <span className='cartoesClassificacao'>Cartão principal</span>
                    <p>
                        <span>Número do cartão:</span> 5504 5699 8639 5542
                    </p>
                    <p>
                        <span>Nome no cartão:</span> José da Silva
                    </p>
                    <p>
                        <span>Bandeira:</span> MasterCard
                    </p>
                    <p>
                        <span>Codígo:</span> 253
                    </p>
                    <Link href="/admin/clientes/cartoes/alterar" className='btnSubmit mt-4 mr-4'>Alterar</Link>
                    <Link href="/admin/clientes/cartoes" className='btnSubmit mt-4'>Excluir</Link>
                </div>
                <div className="cartao">
                    <span className='cartoesClassificacao'>Cartão adicional</span>
                    <p>
                        <span>Número do cartão:</span> 5504 5699 8639 5542
                    </p>
                    <p>
                        <span>Nome no cartão:</span> José da Silva
                    </p>
                    <p>
                        <span>Bandeira:</span> MasterCard
                    </p>
                    <p>
                        <span>Codígo:</span> 253
                    </p>
                    <Link href="/admin/clientes/cartoes/alterar" className='btnSubmit mt-4 mr-4'>Alterar</Link>
                    <Link href="/admin/clientes/cartoes" className='btnSubmit mt-4'>Excluir</Link>
                </div>
            </div>
        </>
    )
}
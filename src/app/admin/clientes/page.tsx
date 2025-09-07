import './style.css';
import Link from 'next/link';

export default function ClientesPage() {
    return (
        <>
            <div className="cabecalhoPage">
                <div className="descricao">
                    <h2 className="titlePage">Clientes</h2>
                    <p className="descriptionPage">Gerencie os clientes cadastrados na plataforma, edite suas informações, adicione novos endereços, cartões de crédito e inative os  mesmos se necessário.</p>
                </div>
                <div className="acao">
                    <Link href="/admin/clientes/cadastrar">Cadastrar</Link>
                </div>
            </div>
            <table cellPadding={10} cellSpacing={10}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data de Nascimento</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Emerson Timoteo</td>
                        <td>25/08/1992</td>
                        <td>000.000.000-00</td>
                        <td>(11) 90000-0000</td>
                        <td>emerson@gmail.com</td>
                        <td>
                            <Link href="/admin/clientes/enderecos">Endereços</Link>
                            <Link href="/admin/clientes/cartoes">Cartões</Link>
                            <Link href="/admin/clientes/editar">Editar</Link>
                            <Link href="#">Inativar</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Thiago Felipe</td>
                        <td>03/05/2005</td>
                        <td>000.000.000-00</td>
                        <td>(11) 90000-0000</td>
                        <td>thiago@gmail.com</td>
                        <td>
                            <Link href="/admin/clientes/enderecos">Endereços</Link>
                            <Link href="/admin/clientes/cartoes">Cartões</Link>
                            <Link href="/admin/clientes/editar">Editar</Link>
                            <Link href="#">Inativar</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Larissa Pereira</td>
                        <td>15/09/2001</td>
                        <td>000.000.000-00</td>
                        <td>(11) 90000-0000</td>
                        <td>larissa@gmail.com</td>
                        <td>
                            <Link href="/admin/clientes/enderecos">Endereços</Link>
                            <Link href="/admin/clientes/cartoes">Cartões</Link>
                            <Link href="/admin/clientes/editar">Editar</Link>
                            <Link href="#">Inativar</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Carolina dos Santos</td>
                        <td>30/10/2003</td>
                        <td>000.000.000-00</td>
                        <td>(11) 90000-0000</td>
                        <td>carolina@gmail.com</td>
                        <td>
                            <Link href="/admin/clientes/enderecos">Endereços</Link>
                            <Link href="/admin/clientes/cartoes">Cartões</Link>
                            <Link href="/admin/clientes/editar">Editar</Link>
                            <Link href="#">Inativar</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Valdite de Lima</td>
                        <td>16/04/1980</td>
                        <td>000.000.000-00</td>
                        <td>(11) 90000-0000</td>
                        <td>valdite@gmail.com</td>
                        <td>
                            <Link href="/admin/clientes/enderecos">Endereços</Link>
                            <Link href="/admin/clientes/cartoes">Cartões</Link>
                            <Link href="/admin/clientes/editar">Editar</Link>
                            <Link href="#">Inativar</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
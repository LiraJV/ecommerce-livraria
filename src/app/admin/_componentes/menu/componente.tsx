import './style.css';
import Image from 'next/image';
import Link from 'next/link';

export default function MenuComponente() {
    return (
        <header className="menu-lateral">
            <div className="logo-area">
                <Image src='/good-reader-logo.png' alt='Logo - Good Reader' width={1024} height={1024} />
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <Link href="/admin/livros">Livros</Link>
                    </li>
                    <li>
                        <Link href="/admin/clientes">Clientes</Link>
                    </li>
                    <li>
                        <Link href="/admin/vendas">Vendas</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
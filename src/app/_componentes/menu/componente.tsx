import Link from "next/link";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";

export default function MenuComponente(){
    return (
        <>
            <header className="menu w-full flex flex-row items-center justify-around">
                <div className="logo">
                    <Image src='/good-reader-logo.png' alt='Logo - Good Reader' width={100} height={100}></Image>
                </div>
                <div className="navbar w-1/3">
                    <ul className="flex flex-row">
                        <li>
                            <Link href="/livros">Livros</Link>
                        </li>
                    </ul>
                </div>
                <Link className="cart-button flex items-center" href="/carrinho">
                    <HiShoppingCart/>
                    Carrinho
                </Link>
            </header>
        </>
    )
}
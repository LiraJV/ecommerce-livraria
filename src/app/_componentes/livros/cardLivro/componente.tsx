import Image from "next/image"
import './style.css';

export default function CardLivro(){
    return(
        <>
            <div className="card-livro">
                <Image src='/ensaio-sobre-a-cegueira.jpg' alt='Ensaio sobre a cegueira' width={200} height={200}></Image>
                <h4 className="titulo">Ensaio sobre a cegueira</h4>
                <p className="autor">Raphael Montes</p>
                <p className="valor">R$ 64,90</p>
                <button className="btn-comprar" type="submit">
                    Comprar
                </button>
            </div>
        </>
    )
}
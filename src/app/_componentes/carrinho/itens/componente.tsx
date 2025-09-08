'use client'

import { useState } from 'react'
import './style.css'
import Image from 'next/image'

export default function  ItemCarrinho(){
    const [qtdItem, setQtdItem] = useState(2);

    function handleQtdChange(event: React.ChangeEvent<HTMLInputElement>){
        setQtdItem(Number(event.target.value));
    }

    return (
        <>
            <div className="flex gap-4 w-full bg-gray-100 p-5 rounded-lg item-carrinho">
                <Image src='/ensaio-sobre-a-cegueira.jpg' alt='Ensaio sobre a cegueira' width={100} height={100}></Image>
                <div className="item-dados">
                    <h4 className="font-bold text-xl">Ensaio sobre a cegueira</h4>
                    <p className="autor">José Saramago</p>
                    <p className="preco">R$ 64,90</p>
                    <div className="flex flex-col">
                        <label htmlFor="qtd-item">Quantidade:</label>
                        <input className="bg-white" name="qtd-item" id="qtd-item" value={qtdItem} onChange={handleQtdChange} />
                    </div>
                </div>
            </div>
        </>
    )
}
import "./style.css"
import ItemCarrinho from "../_componentes/carrinho/itens/componente"
import Link from "next/link"

export default function CarrinhoPage(){
    return(
        <>
            <div className="flex flex-row items-center justify-between p-10 h-full">
                <div className="carrinho w-full bg-white h-full p-5 rounded-md grid grid-cols-3 gap-10">
                    <div className="info-compra col-span-2 pr-10">
                        <h3 className="text-2xl font-bold">Informações da compra</h3>
                        <p>Confira as informações necessárias para a realização da compra abaixo.</p>
                        <div className="info dados-pessoais">
                            <h4 className="text-md font-medium mt-2">Dados pessoais</h4>
                            <p>Nome: Emerson Timoteo</p>
                            <p>CPF: 000.000.000-00</p>
                            <p>Telefone: (11) 90000-0000</p>
                            <p>E-mail: emerson@gmail.com</p>
                        </div>
                        <div className="info endereco">
                            <h4 className="text-md font-medium mt-2">Endereço de entrega</h4>
                            <div className="endereco-item">
                                <input type="radio" name="endereco" id="endereco" defaultChecked />
                                <p>Rua São João do Carmo, 152 - Vila dos Santos, Mogi das Cruzes - SP, 08699-999</p>
                            </div>
                            <button type="button">
                                Adicionar novo endereço
                            </button>
                        </div>
                        <div className="info pagamento">
                            <h4 className="text-md font-medium mt-2">Forma de pagamento</h4>
                            <div className="cartoes grid grid-cols-3">
                                <div className="cartao">
                                    <input type="radio" name="cartao1" id="cartao" defaultChecked />
                                    <div className="dados">
                                        <p>Número do Cartão: 5504 5699 8639 5542</p>
                                        <p>Nome no cartão: José da Silva</p>
                                        <p>Bandeira: MasterCard</p>
                                        <p>Código: 253</p>
                                    </div>
                                </div>
                                <div className="cartao">
                                <input type="radio" name="cartao1" id="cartao" />
                                    <div className="dados">
                                        <p>Número do Cartão: 5504 5699 8639 5542</p>
                                        <p>Nome no cartão: José da Silva</p>
                                        <p>Bandeira: MasterCard</p>
                                        <p>Código: 253</p>
                                    </div>
                                </div>
                                <div className="cartao">
                                    <input type="radio" name="cartao1" id="cartao" />
                                    <div className="dados">
                                        <p>Número do Cartão: 5504 5699 8639 5542</p>
                                        <p>Nome no cartão: José da Silva</p>
                                        <p>Bandeira: MasterCard</p>
                                        <p>Código: 253</p>
                                    </div>
                                </div>
                            </div>
                            <button type="button">
                                Adicionar novo cartão
                            </button>
                        </div>
                    </div>
                    <div className="itens-carrinho overflow-auto">
                        <h3 className="text-2xl font-bold">Itens do carrinho</h3>
                        <p>Confira os itens que estão no carrinho atualmente.</p>
                        <div className="flex flex-col gap-2.5 items mt-2.5">
                            <ItemCarrinho/>
                        </div>
                        <Link href="/carrinho/finalizado">
                            Finalizar compra
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
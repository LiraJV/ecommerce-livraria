import { HiCheckCircle } from "react-icons/hi";

export default function CompraFinalizadaPage(){
    return(
        <>
            <div className="flex flex-row items-center justify-between p-10 h-full">
                <div className="w-full bg-white h-full p-5 rounded-md flex flex-col items-center justify-center">
                    <HiCheckCircle className="text-9xl" />
                    <p>Compra realizada com sucesso!</p>
                    <p>Continue acompanhando o estado da sua compra.</p>
                </div>
            </div>
        </>
    )
}
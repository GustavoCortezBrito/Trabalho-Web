

function Main() {
    return (
        <div className="mt-10">
            <h1 className="text-center text-3xl font-bold">Conheça Nossos Produtos!</h1>
            <ul className='justify-center flex pt-16 flex-row flex-wrap space-x-32'>
                <li className="border-2 border-solid border-black rounded-3xl w-56 text-center cursor-pointer">
                    <h1 className=" text-2xl font-semibold">Whey</h1>
                    <img src="/whey.png" alt="imagem do whey" className="w-56"></img>
                    <p className=" text-lg">Aumente sua Hipertrofia com WheyPure!</p>
                    <p className="text-lg font-bold">R$ 100,00</p>
                </li>
                <li className="border-2 border-solid border-black rounded-3xl w-56 text-center cursor-pointer">
                    <h1 className=" text-2xl font-semibold">Creatina</h1>
                    <img src="/creatina.png" alt="imagem da creatina" className="w-56"></img>
                    <p className=" text-lg">Aumente sua Força com Creatina!</p>
                    <p className="text-lg font-bold">R$ 120,00</p>
                </li>
                <li className="border-2 border-solid border-black rounded-3xl w-56 text-center cursor-pointer">
                    <h1 className=" text-2xl font-semibold">Glutamina</h1>
                    <img src="/glutamina.png" alt="imagem da glutamina" className="w-56"></img>
                    <p className=" text-lg">Aumente sua Imunidade com Glutamina!</p>
                    <p className="text-lg font-bold">R$ 65,00</p>
                </li>
            </ul>
            <ul className='justify-center flex pt-24 flex-row flex-wrap space-x-32 mb-10'>
                <li className="border-2 border-solid border-black rounded-3xl w-56 text-center cursor-pointer">
                    <h1 className=" text-2xl font-semibold">Beta Lanina</h1>
                    <img src="/betapro.png" alt="imagem do whey" className="w-56"></img>
                    <p className=" text-lg">Aumente sua resistência com Beta lanina!</p>
                    <p className="text-lg font-bold">R$ 50,00</p>
                </li>
                <li className="border-2 border-solid border-black rounded-3xl w-56 text-center cursor-pointer">
                    <h1 className=" text-2xl font-semibold">Colágeno</h1>
                    <img src="/colageno.png" alt="imagem da creatina" className="w-56"></img>
                    <p className=" text-lg">Melhore sua pele com Colágeno!</p>
                    <p className="text-lg font-bold">R$ 40,00</p>
                </li>
                <li className="border-2 border-solid border-black rounded-3xl w-56 text-center cursor-pointer">
                    <h1 className=" text-2xl font-semibold">Pré-Treino</h1>
                    <img src="/pretreino.png" alt="imagem da glutamina" className="w-56"></img>
                    <p className=" text-lg">Aumente sua disposição com Pré-Treino!</p>
                    <p className="text-lg font-bold">R$ 85,00</p>
                </li>
            </ul>
        </div>
    )
}

export default Main
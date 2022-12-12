

function Contato() {
    return (
        <div>
            <div className=" text-center bg-white">
                <div><h1 className="text-4xl font-bold inline-block mt-10 border-b-2 border-black">Formas de Contato:</h1></div>
                <div className="flex justify-center space-x-16 mt-10">
                    <div className="text-center">
                        <h1>Email:</h1>
                        <a href="https://is.gd/mailsportnutrition"><img src="/mail.png" alt="logo email" className="w-10"></img></a>
                    </div>
                    <div className="text-center">
                        <h1>Whatsapp:</h1>
                        <a href="https://wa.me/5517981404761?text=Gostaria+de+ser+atendido+pela+equipe+SportNutrition%21"><img src="/whatsapp.png" alt="logo whatsapp" className="w-10 ml-4"></img></a>
                    </div>
                    <div className="text-center">
                        <h1>Fixo:</h1>
                        <a href="https://is.gd/sportnutrition"><img src="/telephone.png" alt="logo telefone" className="w-10"></img></a>
                    </div>
                </div>
            </div>
            <div className=" text-center bg-white mb-10">
                <div><h1 className="text-4xl font-bold inline-block mt-10 border-b-2 border-black">Onde nos localizamos?</h1></div>
                <div className="flex justify-center py-10"><img src="/mapa.png" className="fill-black" alt="logo do header"></img></div>
               <div><p className="text-xl"> Nós estamos no bairro Itaguaçu na Grande Florianopolis</p></div>
            </div>
        </div>
    )
}

export default Contato
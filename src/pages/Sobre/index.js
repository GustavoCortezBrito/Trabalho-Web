import { Link } from "react-router-dom"
import Header from "../../components/Header"


function Sobre() {
    return (
        <div className="mb-32">
            <Header></Header>
            <div className=" text-center bg-white">
                <div><h1 className="text-2xl md:text-4xl font-bold inline-block mt-10 border-b-2 border-black">Quem somos nós?</h1></div>
                <div className="flex justify-center py-10"><img src="/logo-black.png" className="fill-black" alt="logo do header"></img></div>
               <div><p className="text-sm m-auto md:text-xl">Somos o maior revendendor de suplementos da probiotica de florianopolis e região. <br/> Prezamos pelos otimos preços, qualidade do produto, de nosso atendimento e facilidade em compra e entrega.<br/> Venha nos Conhecer!</p></div>
            </div>
            <div className=" text-center bg-white">
                <div><h1 className="text-2xl md:text-4xl font-bold inline-block mt-10 border-b-2 border-black">Qual nosso objetivo?</h1></div>
                <div className="flex justify-center py-10"><img src="/target.png" className="w-52" alt="logo do header"></img></div>
               <div><p className="text-sm md:text-xl">Nosso objetivo é proporcionar os melhores produtos do mercado ao que tange a suplementos <br/>e proporcionar também um ótimo atendimento! </p></div>
            </div>
            <div className=" text-center bg-white">
                <div><h1 className="text-2xl md:text-4xl font-bold inline-block mt-10 border-b-2 border-black">Nossos Produtos</h1></div>
                <div className="flex justify-center py-10"><img src="/whey.png" className="w-52" alt="logo do header"></img></div>
               <div><p className="text-sm md:text-xl">Nossos Produtos são de extrema qualidade, uma vez que são da probiotica suplementos.<br/>Temos um diversidade enorme de suplementos que vai desde whey até colágeneo.</p></div>
               <Link to='/'><button className="border-2 border-black rounded-2xl p-1 my-10 hover:text-yellow-500">Compre já!</button></Link>
            </div>
        </div>
    )
}

export default Sobre
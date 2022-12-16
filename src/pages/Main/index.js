import { useState } from "react"
import Produto from "../../components/Produto"
import data from  "../../utils/data"
import Header from "../../components/Header"

const Main = () => {

    const [cart, setCart] = useState([])
    const handleClick = (props) => {
        cart.push(props)
        cart.map((item) => {
            console.log(item.nome)
        })
    }

    return (
        <div className="mb-32">
        <Header/>
        <div className="mt-10">
            <h1 className="text-center text-2xl md:text-3xl font-bold mb-10">Conheça Nossos Produtos!</h1>
            <div className="ml-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mr-6 md:mr-3">
                {data.produtos.map((produto) => (
                    <Produto props={produto} key={produto.id} handleClick={handleClick}></Produto>
                ))}
                </div>
        </div>
        </div>

    )
}

export default Main
import { useState } from "react"
import Produto from "../../components/Produto"
import data from  "../../utils/data"

const Main = () => {

    const [cart, setCart] = useState([])

    const handleClick = (props) => {
        cart.push(props)
        console.log(cart)
    }

    return (
        <div className="mt-10">
            <h1 className="text-center text-3xl font-bold mb-10">Conheça Nossos Produtos!</h1>
            <div className="ml-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {data.produtos.map((produto) => (
                    <Produto props={produto} key={produto.id} handleClick={handleClick}></Produto>
                ))}
                </div>
        </div>
    )
}

export default Main
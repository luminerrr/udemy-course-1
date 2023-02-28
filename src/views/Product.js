import { useParams } from "react-router-dom"
import Loader from "../components/Loader"
import ProductCard from "../components/ProductCard"
import useAxiosGet from "../hooks/HttpRequest"


export default function Product(){
    const { id } = useParams()
    const url = `https://63fceb41859df29986c77da2.mockapi.io/products/${id}`
    let product = useAxiosGet(url)
    let content = null
    
    if(product.loading){
        content = <Loader />
    }

    if(product.error){
        content = <h1>Error Occurred</h1>
    }
    
    if(product.data){
        content =
            <ProductCard product = {product.data}/>
    }

    return <>{content}</>
    
}
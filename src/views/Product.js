import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../components/Loader"
import ProductCard from "../components/ProductCard"


export default function Product(){
    const { id } = useParams()
    const url = `https://63fceb41859df29986c77da2.mockapi.io/products/${id}`
    const [product, setProduct] = useState({
        loading:false,
        data:null,
        error:false
    })
    
    let content = null
    
    useEffect(()=>{
        setProduct({
            loading:true,
            data:null,
            error:false
        })
        axios.get(url)
        .then(response => setProduct({
            loading: false,
            data: response.data
        }))
        .catch(()=>{
            setProduct({
                loading:false,
                data:null,
                error:true
            })
        })
    }, [url])

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
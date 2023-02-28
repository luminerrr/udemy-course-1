import { useState, useEffect } from "react";
import axios from "axios";
import Loader from '../components/Loader'
import ProductCard from "../components/ProductCard";

export default function Home() {
    let content = null;
    const url = `https://63fceb41859df29986c77da2.mockapi.io/products?page=1&limit=5`
    const [products, setProducts] = useState({
        loading:false,
        data:null,
        error:false
    })

    useEffect(()=>{
        setProducts({
            loading:true,
            data:null,
            error:false
        })
        axios.get(url)
        .then(response => setProducts({
            loading: false,
            data: response.data
        }))
        .catch(()=>{
            setProducts({
                loading:false,
                data:null,
                error:true
            })
        })
    }, [url])

    if(products.loading){
        content = <Loader />
    }

    if(products.error){
        content = <h1>Error Occurred</h1>
    }

    if(products.data){
        content =
        products.data.map((product, key)=>
            <div key={key}>
                {product.name}
                <ProductCard product={product}/>
            </div>
        )
    }

    return(
    <>
        <h1 className="text-2xl font-bold">Best Seller Products</h1>
        {content}
    </>
    )
}
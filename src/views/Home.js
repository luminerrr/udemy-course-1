import Loader from '../components/Loader'
import ProductCard from "../components/ProductCard";
import useAxiosGet from "../hooks/HttpRequest";

export default function Home() {
    let content = null;
    const url = `https://63fceb41859df29986c77da2.mockapi.io/products?page=1&limit=5`
    let products = useAxiosGet(url)

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
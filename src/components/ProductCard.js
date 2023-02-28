import { Link } from "react-router-dom";

export default function ProductCard(props){

    return(
    <>
    
        <div className="border mb-4 rounded overflow-hidden">
            <Link to={`/products/${props.product.id}`}>
                <div
                style={{
                    'backgroundImage': `url('${props.product.images}')`
                }}
                className="w-full h-64 bg-blue-200 bg-cover">
                </div>
            </Link>
            <div className="p-3">
                <Link to={`/products/${props.product.id}`}>
                    <h3 className="font-bold text-xl mb-3">{props.product.name}</h3>
                </Link>
                <div className="font-bold mb-3">
                    $ {props.product.price}
                </div>
                <div className="mb-3">
                    {props.product.description}
                </div>
                <Link 
                to={`/products/${props.product.id}`}
                className='bg-blue-500 text-white pt-2 flex justify-center items-center'>
                    View
                </Link>
            </div>
        </div>
        
    
    
    </>
    )
}
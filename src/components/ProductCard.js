
export default function ProductCard(props){

    return(
    <>
    <div className="border mb-4 rounded overflow-hidden">
        <div
        style={{
            'backgroundImage': `url('${props.product.images}')`
        }}
        className="w-full h-64 bg-blue-200 bg-cover">

        </div>
        {props.product.name}
    </div>
    </>
    )
}
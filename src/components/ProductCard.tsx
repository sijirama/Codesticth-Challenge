import { Product } from '../Types/Product'

interface Props {
    product: Product
    key: string
}

export default function ProductCard({ product, key }: Props) {
    return (
        <div className="w-30 p-3 bg-black">
            <div style={{ backgroundImage: `url(${product.imageUrl})` }}></div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <div>{key}</div>
        </div>
    )
}

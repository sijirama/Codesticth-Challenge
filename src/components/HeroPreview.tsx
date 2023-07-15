import { useEffect, useState } from 'react'
import { getAllProducts } from '../utils/firebaseFunctions'
import { Product } from '../Types/Product'
import ProductCard from '../components/ProductCard'

export default function HeroPreview() {
    const [products, setProducts] = useState<Product[] | null>(null)
    useEffect(() => {
        const getProducts = async () => {
            const products = await getAllProducts()
            setProducts(products)
        }
        getProducts()
        console.log(products)
    }, [])

    if (products?.length! < 0 || products == null) {
        return <p></p>
    }

    return (
        <section className="w-full py-10 flex items-center justify-center gap-2">
            {products!.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    )
}

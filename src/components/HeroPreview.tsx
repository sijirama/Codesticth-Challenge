import { useEffect, useState } from 'react'
import { getAllProducts } from '../utils/firebaseFunctions'
import { Product } from '../Types/Product'
import ProductCard from '../components/ProductCard'

export default function HeroPreview() {
    const [products, setProducts] = useState<Product[] | null>(null)
    useEffect(() => {
        const getProducts = async () => {
            const products = await getAllProducts()
            setProducts(products.slice(0, 6))
        }
        getProducts()
        //console.log(products)
    }, [])

    if (products?.length! < 0 || products == null) {
        return <p></p>
    }

    return (
        <section className="w-full bg-[#ebebf0] py-10 flex items-center  gap-4 flex-wrap justify-center">
            <div className="justify-start">
                <p className="text-black -tracking-widest font-bold text-3xl md:text-4xl">Best Selling</p>
            </div>
            <section className="w-full bg-[#ebebf0] py-10 flex items-center  gap-4 flex-wrap justify-center">
                {products!.map((product) => (
                    <ProductCard key={product.id} form="row" product={product} />
                ))}
            </section>
        </section>
    )
}

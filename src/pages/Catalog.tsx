import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '/bg/gold.jpg'
import { Product } from '../Types/Product'
import { getAllProducts } from '../utils/firebaseFunctions'
import ProductCard from '../components/ProductCard'

export default function Catalog() {
    const [products, setProducts] = useState<Product[] | null>(null)

    useEffect(() => {
        const getProducts = async () => {
            const products = await getAllProducts()
            setProducts(products.slice(0, 6))
        }
        getProducts()
    }, [])

    return (
        <section className="bg-white min-h-screen">
            <section style={{ backgroundImage: `url(${HeroImage})` }} className="text-mysecondary bg-cover bg-center">
                <Navbar />
                <div className="py-16 flex items-center justify-center">
                    <p className="text-4xl md:text-5xl font-rubik font-bold -tracking-wider">Catalog</p>
                </div>
            </section>
            <section className="flex items-center gap-4 flex-wrap justify-center py-4">
                {products?.map((product) => <ProductCard key={product.id} form="col" product={product} />)}
            </section>
        </section>
    )
}

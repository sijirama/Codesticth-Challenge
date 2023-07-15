//import useUserAuth from '../context/AuthContext'
import { Product } from '../Types/Product'
//import { getUserCart } from '../utils/firebaseFunctions'
import {} from 'react-icons/'
import useProduct from '../context/ProductContext'
import { useEffect, useState } from 'react'
import capitalizeFirstLetter from '../utils/functions.ts'

export default function ProductModal() {
    const { isModalOpen, hideModal, selectedProduct } = useProduct()
    const [product, setProduct] = useState<Product | null>(null)
    //const { user } = useUserAuth()
    useEffect(() => {
        const submit = () => {
            if (selectedProduct) {
                setProduct(selectedProduct)
            } else {
                setProduct(null)
            }
        }
        submit()
    })

    return (
        <section
            onClick={hideModal}
            className={` ${
                isModalOpen ? 'fixed' : 'hidden'
            } inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center w-screen h-screen ease-in-out transition-opacity duration-900 z-40`}
        >
            <div
                className={` ${
                    isModalOpen ? null : 'hidden'
                } w-full h-1/2  lg:w-1/2 lg:h-2/3 bg-white lg:rounded-2xl flex flex-row`}
            >
                <div
                    className="w-1/2 md:rounded-l-2xl bg-center bg-cover"
                    style={{ backgroundImage: `url(${product?.imageUrl})` }}
                ></div>
                <div className="w/1/2 flex flex-col justify-between gap-3 text-[#1f1f29] p-1 md:p-3">
                    <div></div>
                    <div>
                        <div className="font-rubik tracking-wider font-light ">
                            {capitalizeFirstLetter(product?.category)}
                        </div>
                        <p className="font-rubik text-xl -tracking-wider font-bold">{product?.name}</p>
                        <p className="font-thin font-rubik ">${product?.price}</p>
                        <p>{product?.description}</p>
                        <p>{product?.quantity} left.</p>
                    </div>
                    <div>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

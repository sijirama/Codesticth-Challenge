import { useState, useEffect } from 'react'
import useUserAuth from '../context/AuthContext'
import { Product } from '../Types/Product'
import { getUserCart } from '../utils/firebaseFunctions'
import { RiShoppingCart2Line } from 'react-icons/ri'
//import useProduct from '../context/ProductContext'

export default function CartModal() {
    const { isModalOpen, hideModal, user } = useUserAuth()
    //const { cart } = useProduct()
    const [cartt, setCartt] = useState<Product[] | null>(null)

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const cart = await getUserCart(user?.uid!)
                setCartt(cart.items)
            } catch (e) {
                setCartt(null)
            }
        }

        if (isModalOpen) {
            fetchCart()
            console.log(cartt)
        }
    }, [isModalOpen, user?.uid])

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
                } w-full h-1/2  lg:w-2/3 lg:h-2/3 bg-[#e0d3b0] lg:rounded-2xl flex flex-col justify-center p-3`}
            >
                {cartt?.length! > 0 ? (
                    <p className="font-rubik text-2xl lg:text-4xl -tracking-wider text-black font-bold text-center p-3">
                        Cart
                    </p>
                ) : null}
                {cartt?.length! > 0 ? (
                    <div className="min-h-[80%]  flex flex-col md:flex-row flex-wrap overflow-y-scroll text-black">
                        <div className=" w-full md:w-1/2 h-1/2 md:h-full ">
                            {(cartt as any)?.map((product: Product) => {
                                <div key={product.id} className='text-black border border-black '>
                                    <div>{product.name}</div>
                                </div>
                            })}
                        </div>
                        <div className=" w-full md:w-1/2 h-1/2 md:h-full ">yoooo</div>
                    </div>
                ) : (
                    <div className="min-h-[80%] flex items-center justify-center flex-col gap-2 text-center">
                        <RiShoppingCart2Line className="text-black font-extrabold text-4xl md:text-6xl lg:text-7xl" />
                        <p className="font-rubik text-black font-bold -tracking-wider text-2xl md:text-3xl lg:text-4xl">
                            Nothing Here to See!
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

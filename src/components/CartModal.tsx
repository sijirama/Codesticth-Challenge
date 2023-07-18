import { useState, useEffect } from 'react'
import useUserAuth from '../context/AuthContext'
import { Product } from '../Types/Product'
import { getUserCart } from '../utils/firebaseFunctions'
import { RiShoppingCart2Line, RiDeleteBin7Fill } from 'react-icons/ri'
import { calculateTotalPrice } from '../utils/functions'
import useProduct from '../context/ProductContext'
import { removeFromCart } from '../utils/firebaseFunctions'

export default function CartModal() {
    const { isModalOpen, user } = useUserAuth()
    const { setCartLength } = useProduct()
    const [cartt, setCartt] = useState<Product[] | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchCart = async () => {
            try {
                setLoading(true)
                const cart = await getUserCart(user?.uid!)
                setCartt(cart.items)
            } catch (e) {
                setCartt(null)
            } finally {
                setLoading(false)
            }
        }

        if (isModalOpen) {
            fetchCart()
            console.log(cartt)
        }
    }, [isModalOpen])

    const handleRemoveItem = async (prodId: string) => {
        await removeFromCart(user?.uid!, prodId)
        const cart = await getUserCart(user?.uid!)
        setCartt(cart.items)
        setCartLength(cart.items.length)
    }

    //onClick={hideModal}
    return (
        <section
            className={` ${
                isModalOpen ? 'fixed' : 'hidden'
            } inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center w-screen h-screen ease-in-out transition-opacity duration-900 z-40`}
        >
            <div
                className={` ${
                    isModalOpen ? null : 'hidden'
                } w-full h-1/2  lg:w-2/3 lg:h-2/3 bg-[#e0d3b0] lg:rounded-2xl flex flex-col justify-center p-3`}
            >
                {/*loading && <p>Loading like a pro ...</p>*/}
                {cartt?.length! > 0 ? (
                    <p className="font-rubik text-2xl lg:text-4xl -tracking-wider text-black font-bold text-center p-3">
                        Cart
                    </p>
                ) : null}
                {cartt?.length! > 0 ? (
                    <div className="min-h-[80%] flex flex-col md:flex-row flex-wrap overflow-y-scroll text-black">
                        <div className=" w-full md:w-1/2 h-1/2 md:h-full flex flex-col gap-2">
                            {(cartt as any)?.map((product: Product, index: number) => (
                                <div key={index} className="text-black border border-black ">
                                    <div className="grid grid-cols-3 p-2">
                                        <p>{product.name}</p>
                                        <p>${product.price}</p>
                                        <div>
                                            <RiDeleteBin7Fill
                                                onClick={() => handleRemoveItem(product.id)}
                                                className="cursor-pointer "
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className=" w-full md:w-1/2 h-1/2 md:h-full ">${calculateTotalPrice(cartt!)}</div>
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

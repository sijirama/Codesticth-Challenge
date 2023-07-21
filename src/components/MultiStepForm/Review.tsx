import { useEffect, useState } from 'react'
import useMulti from '../../context/MultiStepFormContext.tsx'
import useProduct from '../../context/ProductContext.tsx'
import useUserAuth from '../../context/AuthContext.tsx'
import { getUserCart } from '../../utils/firebaseFunctions.ts'
import { Product } from '../../Types/Product.ts'
import Lottie from 'react-lottie-player'
import { useNavigate } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import { clearCart } from '../../utils/firebaseFunctions.ts'

export default function Review() {
    const { address, setAddress, payment, setPayment } = useMulti()
    const { fetchCart, setCartLength } = useProduct()
    const [cartt, setCartt] = useState<Product[] | null>(null)
    const { user } = useUserAuth()
    const nav = useNavigate()
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const cart = await getUserCart(user?.uid!)
                setCartt(cart.items)
                setCartLength(cart.items.length)
            } catch (e) {
                setCartt(null)
            } finally {
            }
        }
        if (payment && address) {
            fetchCart()
        }
    }, [address, payment])

    const handleSubmit = async () => {
        setModalOpen(true)
        try {
            // Wait for 3 seconds (you can adjust the time as needed)
            await new Promise((resolve) => setTimeout(resolve, 3000))
            // Perform cart clearing and fetching operations
            setPayment(null)
            setAddress(null)
            await clearCart(user?.uid!)
            await fetchCart()
            nav('/')
        } catch (error) {
            console.error('Error processing cart:', error)
        } finally {
            // Close the modal and navigate to the home page
            setModalOpen(false)
        }
    }

    return (
        <section className="w-full h-full flex items-center justify-center">
            {modalOpen && (
                <Lottie
                    path="https://lottie.host/baf41332-ace5-4dfa-82ca-1c67e3633900/usIEqqZRbn.json"
                    //mode="bounce"
                    //background="black"
                    style={{
                        width: '100%',
                        height: '100%',
                        margin: '0 auto'
                        //minHeight: '400px',
                        //minWidth: '300px'
                    }}
                    loop
                    play
                    //onLoopComplete={handleLoop}
                ></Lottie>
            )}
            {!modalOpen && (
                <div className="bg-gray-700 grid grid-cols-1  md:grid-cols-2 flex-wrap justify-between font-rubik text-white w-5/6 md:w-1/2 h-2/3 p-3 rounded-3xl shadow-2xl items-center ">
                    <div className=" col-span-1 flex flex-col gap-4 items-center h-full border-black  justify-center ">
                        <div className="flex flex-col gap-2 w-2/3">
                            <p className="text-lg font-normal">{user?.displayName}</p>
                            <p className="text-lg font-light">{user?.email}</p>
                            <p className="text-lg font-light">{payment?.phoneNumber}</p>
                            <hr />
                            <p className="text-xl font-bold">{address.street},</p>
                            <p className="text-lg font-light">
                                {address.city}, {address.state}.
                            </p>
                            <p className="text-base tracking-widest font-light">{address.postalCode}</p>
                        </div>
                        <Button
                            variant="outlined"
                            className="bg-black text-white font-rubik py-3 px-12 rounded-md w-2/3"
                            onClick={() => {
                                handleSubmit()
                            }}
                        >
                            Submit
                        </Button>
                    </div>

                    <div className=" hidden  col-span-1 h-full md:flex flex-col justify-between items-center gap-3 overflow-scroll">
                        {cartt?.map((item, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-4  py-2 items-center gap-2 w-full border-b-1 border-b-white"
                            >
                                <img
                                    src={item.imageUrl}
                                    className="col-span-1"
                                    style={{ borderRadius: '50%', width: '60px', height: '60px' }}
                                ></img>
                                <div className="col-span-3">
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    {/* <p>{item.quantity}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}

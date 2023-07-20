import { useEffect, useState } from 'react'
import useMulti from '../../context/MultiStepFormContext.tsx'
import useProduct from '../../context/ProductContext.tsx'
import useUserAuth from '../../context/AuthContext.tsx'
import { getUserCart } from '../../utils/firebaseFunctions.ts'
import { toast } from 'sonner'

export default function Review() {
    const { address, setAddress, payment, setPayment } = useMulti()
    const {} = useProduct()
    const [cartt, setCartt] = useState<Product[] | null>(null)
    const [loading, setLoading] = useState(false)
    const { user } = useUserAuth()

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

        if (payment && address) {
            fetchCart()
            console.log(cartt)
        }
    }, [address])

    const handleSubmit = (values: typeof address) => {
        setPayment(null)
        setAddress(null)
        console.log('Submitted')
    }

    return (
        <section className="w-full h-full flex items-center justify-center">
            <div className="bg-gray-700  text-white w-5/6 md:w-2/3 h-2/3 p-3 rounded-3xl shadow-2xl">
                <p>{address.city}</p>
            </div>
        </section>
    )
}

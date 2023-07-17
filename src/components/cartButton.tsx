//import { Link } from 'react-router-dom'
import { HiOutlineShoppingCart } from 'react-icons/hi'
//import { Badge } from 'rsuite'
import useUserAuth from '../context/AuthContext'
import useProduct from '../context/ProductContext'
import { useEffect } from 'react'

export default function Cart() {
    const { user, toggleModal } = useUserAuth()
    const { cartLength, fetchCart } = useProduct()

    useEffect(() => {
        fetchCart()
        //console.log('Fetched cart length --- CartButton')
    }, [user])

    //<Badge style={{ padding: '0.4rem' }} content={cartLength ? cartLength : 0}>
    //</div>
    return (
        <div
            onClick={toggleModal}
            className={` ${
                !user ? 'hidden' : null
            } rounded-full  lg:w-16 lg:h-16 p-2 md:p-3 lg:p-4 fixed bottom-10 lg:bottom-20 left-10  lg:left-20 bg-myprimary flex justify-center items-center shadow-2xl hover:scale-110 transition ease-in-out delay-100 z-50 cursor-pointer`}
        >
            <div className="absolute top-[-0.2rem] right-[-0.4rem] px-2 py-0.5 font-semibold bg-mytertiary rounded-full">
                {cartLength ? cartLength : 0}
            </div>
            <HiOutlineShoppingCart className="text-white text-3xl md:text-4xl" />
        </div>
    )
}

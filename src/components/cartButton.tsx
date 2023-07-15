//import { Link } from 'react-router-dom'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Badge } from 'rsuite'
import useUserAuth from '../context/AuthContext'
import useProduct from '../context/ProductContext'

export default function Cart() {
    const { user, toggleModal } = useUserAuth()
    const { cartLength } = useProduct()

    return (
        <div
            onClick={toggleModal}
            className={` ${
                !user ? 'hidden' : null
            } rounded-full  lg:w-16 lg:h-16 p-2 md:p-3 lg:p-4 fixed bottom-10 lg:bottom-20 left-10  lg:left-20 bg-myprimary flex justify-center items-center shadow-2xl hover:scale-110 transition ease-in-out delay-100 z-50 cursor-pointer`}
        >
            <Badge style={{ padding: '0.4rem' }} content={cartLength ? cartLength : 0}>
                <HiOutlineShoppingCart className="text-white text-3xl md:text-4xl" />
            </Badge>
        </div>
    )
}

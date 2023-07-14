import { Link } from 'react-router-dom'
import { HiOutlineShoppingCart } from 'react-icons/hi'

export default function Cart() {
    return (
        <Link to="cart">
            <div className="rounded-full  lg:w-16 lg:h-16 p-3 md:p-3 lg:p-4 fixed bottom-10 lg:bottom-20 left-10  lg:left-20 bg-myprimary flex justify-center items-center shadow-2xl hover:scale-110 transition ease-in-out delay-100 z-50">
                <HiOutlineShoppingCart className="text-white text-3xl md:text-4xl" />
            </div>
        </Link>
    )
}

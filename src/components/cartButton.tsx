//import { Link } from 'react-router-dom'
import { HiOutlineShoppingCart } from 'react-icons/hi'
//import { Badge } from 'rsuite'
import useUserAuth from '../context/AuthContext'
import useProduct from '../context/ProductContext'
import { useEffect, useState } from 'react'

const debounce = (func: () => void, delay: number) => {
    let timeoutId: any
    return function() {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            //@ts-ignore
            func.apply(this, arguments)
        }, delay)
    }
}

export default function Cart() {
    const { user, toggleModal } = useUserAuth()
    const { cartLength, fetchCart } = useProduct()
    //@ts-ignore
    const [isHidden, setIsHidden] = useState(true)
    const [grey, setGrey] = useState(false)

    const cartButton = document.getElementById('cartButton')
    const cartButtonRect = cartButton?.getBoundingClientRect()

    useEffect(() => {
        fetchCart()
    }, [user])

    useEffect(() => {
        fetchCart()
    }, [])

    useEffect(() => {
        const href = window.location.href
        if (href.slice(-8) == 'checkout') {
            setGrey(true)
        }
    }, [])

    useEffect(() => {
        const handleScroll = debounce(() => {
            //const cartButton = document.getElementById('cartButton')
            const footer = document.getElementById('footer')

            if (cartButton && footer) {
                const footerRect = footer.getBoundingClientRect()

                // console.log(cartButtonRect)
                // console.log(footerRect)

                if (cartButtonRect?.top! >= footerRect.top) {
                    setIsHidden(true)
                } else {
                    setIsHidden(false)
                }
            }
        }, 100)

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div
            id="cartButton"
            onClick={toggleModal}
            className={` ${!user ? 'hidden' : null
                } rounded-full  lg:w-16 lg:h-16 p-2 md:p-3 lg:p-4 fixed bottom-10 lg:bottom-20 left-10  lg:left-20 ${!grey ? 'bg-myprimary' : 'bg-[#292929]'
                } flex justify-center items-center shadow-2xl hover:scale-110 transition ease-in-out delay-100 z-50 cursor-pointer`}
        >
            <div className="absolute top-[-0.2rem] right-[-0.4rem] px-2 py-0.5 font-semibold bg-mytertiary rounded-full">
                {cartLength ? cartLength : 0}
            </div>
            <HiOutlineShoppingCart className="text-white text-3xl md:text-4xl" />
        </div>
    )
}

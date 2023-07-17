import { useState, useEffect, useRef } from 'react'
import { Product } from '../Types/Product'
import { getAllProducts } from '../utils/firebaseFunctions'
import useSearch from '../context/SearchCOntext'
import { FiSearch } from 'react-icons/fi'
import { MdCancel } from 'react-icons/md'
import { LiaShoppingBagSolid } from 'react-icons/lia'
//import useProduct from '../context/ProductContext'

export default function SearchModal() {
    const { isModalOpen, hideModal } = useSearch()
    const [products, setProducts] = useState<Product[] | null>(null)
    const [searched, setSearched] = useState('')
    const [data, setData] = useState<Product[] | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const cart = await getAllProducts()
                setProducts(cart)
            } catch (e) {
                setProducts(null)
            }
        }

        if (isModalOpen) {
            setData(null)
            fetchProducts()
            inputRef.current?.focus()
            //console.log(products)
        }
    }, [isModalOpen])

    const handleInput = (e: any) => {
        setSearched(e.target.value)

        const filtered =
            products && products.filter((product) => product.name.toLowerCase().includes(searched.toLowerCase()))
        setData(filtered!.slice(0, 5))
    }

    return (
        <section
            className={` ${
                isModalOpen ? 'fixed' : 'hidden'
            } inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center w-screen h-screen ease-in-out transition-opacity duration-900 z-40`}
        >
            <div
                className={` ${
                    isModalOpen ? null : 'hidden'
                } w-full h-2/3  lg:w-2/3 lg:h-2/3 bg-[#e0d3b0] lg:rounded-2xl flex gap-3 flex-col items-center p-3 overflow-scroll`}
            >
                <div className="flex justify-end w-full">
                    <MdCancel onClick={hideModal} size={35} className="text-black cursor-pointer" />
                </div>
                <div className="w-2/3 lg:w-1/3 bg-white p-2 rounded-xl flex justify-between items-center">
                    <input
                        value={searched}
                        onChange={handleInput}
                        placeholder="Search for a Product"
                        type="text"
                        ref={inputRef}
                        className="focus:outline-none w-5/6 text-black font-rubik p-1"
                    />
                    <FiSearch className="text-black" size={23} />
                </div>
                <div className="text-black w-full flex items-center justify-center flex-col gap-2 py-3">
                    {data ? (
                        data.map((product) => (
                            <div
                                key={product.id}
                                className="grid gap-2 grid-cols-3 items-center justify-center w-3/4 lg:w-2/3 bg-white rounded-xl shadow-lg"
                            >
                                <div
                                    className="h-20 bg-cover bg-center rounded-l-xl"
                                    style={{ backgroundImage: `url(${product.imageUrl})` }}
                                ></div>
                                <div className=" col-span-2">
                                    <p className="text-black font-rubik font-semibold">{product.name}</p>
                                    <p className="text-sm">${product.price}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex items-center justify-center flex-col gap-2">
                            <LiaShoppingBagSolid size={50} />
                            <p className="font-rubik font-bold text-3xl -tracking-wider">Nothing to See Here.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

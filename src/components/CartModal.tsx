import { Modal } from 'antd'
import useUserAuth from '../context/AuthContext'

export default function CartModal() {
    const { isModalOpen, hideModal } = useUserAuth()

    return (
        <section
            onClick={hideModal}
            className={` ${
                isModalOpen ? 'fixed' : 'hidden'
            } inset-0 bg-black bg-opacity-90 flex items-center justify-center w-screen h-screen ease-in-out transition-opacity duration-900`}
        >
            <div
                className={` ${
                    isModalOpen ? null : 'hidden'
                } w-full h-1/2  lg:w-2/3 lg:h-2/3 bg-myprimary lg:rounded-2xl flex flex-col justify-center p-3`}
            >
                <p className="font-rubik text-2xl lg:text-4xl -tracking-wider text-black font-bold text-center p-3">
                    Cart
                </p>
                <div className="min-h-[80%]  flex flex-col md:flex-row flex-wrap overflow-y-scroll ">
                    <div className=" w-full md:w-1/2 h-1/2 md:h-full bg-red-900"></div>
                    <div className=" w-full md:w-1/2 h-1/2 md:h-full bg-blue-900"></div>
                </div>
            </div>
        </section>
    )
}

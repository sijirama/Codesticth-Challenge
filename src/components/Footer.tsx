import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { LuShoppingCart } from 'react-icons/lu'

export default function Footer() {
    // <div className="w-full h-2/3"></div>
    // <div className="h-1/3"></div>
    const iconSize = 28
    return (
        <section
            id="footer"
            className="relative text-gray-950 w-full h-[70vh] md:h-[60vh] lg:h-[40vh] bg-center bg-cover flex items-center justify-center bg-gray-200"
        >
            <div className="h-full w-5/6 ">
                <div className="h-2/3 flex flex-col justify-center border-black">
                    <div className="w-full md:w-1/3 flex flex-col  justify-center border-black h-full text-center md:text-start ">
                        <div className="flex items-center justify-center md:justify-start gap-[-0.5rem] border-black">
                            <p className="font-Abril -tracking-widest font-light text-2xl ">Duvera</p>
                            <LuShoppingCart size={25} className="font-semibold" />
                        </div>
                        <p className="font-rubik font-bold -tracking-wider text-3xl">
                            We are paving the way for affordable, luxurious{' '}
                            <span className=" md:inline-block bg-gray-950 text-gray-200 p-1 rounded-md px-2 mx-1">
                                Furniture
                            </span>
                            in West Africa.
                        </p>
                    </div>
                </div>
                <div className="h-1/3 flex justify-between items-center border-2 border-t-gray-700 border-gray-200 p-2">
                    <p className="font-bold font-rubik -tracking-wider">Thank you for considering my application.</p>
                    <div className="flex items-center justify-center gap-4">
                        <a href="https://github.com/sijirama" target="_blank">
                            <BsGithub size={iconSize} />
                        </a>

                        <a
                            href="mailto: gbemilesanmi@gmail.com?subject=Hurray, you got the job!&body=Congratulations on getting the job, Welcome to [The name of your company]."
                            target="_blank"
                        >
                            <HiMail size={iconSize + 6} />
                        </a>

                        <a href="https://www.linkedin.com/in/oluwasijibomi-ilesanmi-8504b123a/" target="_blank">
                            <BsLinkedin size={iconSize} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

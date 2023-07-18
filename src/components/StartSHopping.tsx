import HeroImage from '/bg/couch.jpg'

export default function StartSHopping() {
    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <section
            style={{ backgroundImage: `url(${HeroImage})` }}
            className="text-black w-full h-[50vh] md:h-[59vh] bg-center bg-cover flex items-center "
        >
            <div className="w-full md:w--2/3 h-full flex items-center justify-center flex-col gap-3 text-white text-center px-3 lg:px-0">
                <p className="font-rubik -tracking-wider font-extrabold text-4xl md:text-5xl lg:text-6xl ">
                    Luxury at your Fingertips
                </p>
                <p className="font-rubik tracking-widest font-light text-sm md:text-lg  lg:text-xl">
                    Shop at Duvera for the best quality furniture around the world.
                </p>
                <button
                    onClick={handleClick}
                    className="font-rubik -tracking-wider bg-mysecondary py-2 md:py-2 px-3 md:px-6 rounded-md font-semibold hover:md:py-3 hover:md:px-8 ease-in-out duration-200"
                >
                    Shop Now!
                </button>
            </div>
        </section>
    )
}

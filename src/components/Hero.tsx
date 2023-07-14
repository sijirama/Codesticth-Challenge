import HeroImage from '/bg/bg.jpg'

export default function Hero() {
    return (
        <section
            style={{ backgroundImage: `url(${HeroImage})` }}
            className="min-h-full w-full text-black bg-cover bg-center flex items-center lg:items-start justify-center  flex-col"
        >
            <div className="lg:w-1/2 text-center">
                <p className="text-6xl font-extrabold font-rubik -tracking-wider">
                    Buy Sustainable Furniture <br /> Anytime, <br /> Anywhere.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur
                    cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
                    consectetur cupidatat.
                </p>
            </div>
        </section>
    )
}

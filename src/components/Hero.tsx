import { Container } from '../layout/container'
import HeroImage from '/bg/bg.jpg'

export default function Hero() {
    return (
        <section
            style={{ backgroundImage: `url(${HeroImage})` }}
            className="min-h-full w-full text-black bg-cover bg-center bg-fixed flex items-center lg:items-start justify-center  flex-col"
        >
            <Container>
                <div className="lg:w-1/2 text-center lg:text-left border-0 border-black ">
                    <p className="font-light -tracking-wider">
                        Make Every Room a Statement with Our Trendsetting Furniture
                    </p>
                    <p className="text-5xl lg:text-7xl font-extrabold font-rubik tracking-[-0.075em]">
                        Elevate Your Living Space with Exquisite Contemporary Furniture
                    </p>
                    <p className="font-rubik -tracking-wide">
                        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur
                        cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
                        consectetur cupidatat.
                    </p>
                </div>
            </Container>
        </section>
    )
}

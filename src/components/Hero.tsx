import HeroImage from '/bg/bg.png'

export default function Hero() {
    return (
        <section className="min-h-full w-full text-black grid lg:grid-cols-6 lg:grid-rows-5 gap-0">
            <section className="  lg:col-start-1  lg:col-end-4  lg:row-start-1  lg:row-end-6"></section>
            <section
                style={{ backgroundImage: `url(${HeroImage})` }}
                className="lg:col-start-5 lg:col-end-7 lg:row-start-1 lg:row-end-4 bg-cover bg-center bg-fixed lg:rounded-bl-3xl"
            ></section>
            <section className=" lg:col-start-5  lg:col-end-7  lg:row-start-4  lg:row-end-6">
                <p></p>
                <div></div>
                <p></p>
                <div></div>
            </section>
        </section>
    )
}

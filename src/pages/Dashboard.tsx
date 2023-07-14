import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function Dashboard() {
    return (
        <section className="w-full h-screen ">
            <Hero />
            <nav className="fixed top-0 w-full bg-transparent">
                <Navbar />
            </nav>
        </section>
    )
}

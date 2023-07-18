import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HeroPreview from '../components/HeroPreview'
import Navbar from '../components/Navbar'
import StartSHopping from '../components/StartSHopping'

export default function Dashboard() {
    return (
        <section className="w-full h-screen relative">
            <Hero />
            <nav className="fixed top-0 w-full bg-transparent">
                <Navbar />
            </nav>
            <HeroPreview />
            <StartSHopping />
            <Footer />
        </section>
    )
}

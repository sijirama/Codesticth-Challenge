import { Container } from '../layout/container'
import { NavAuthSection } from '../minicomponents/NavAuthSection'
import { ProfileMenu } from '../minicomponents/ProfileDropDown'

export default function Navbar() {
    return (
        <Container>
            <nav className=" bg-transparent w-full h-16 border-red-600 p-2 flex justify-between items-center">
                <div></div>
                <div className="flex items-center justify-around">
                    <NavAuthSection />
                    <ProfileMenu />
                </div>
            </nav>
        </Container>
    )
}

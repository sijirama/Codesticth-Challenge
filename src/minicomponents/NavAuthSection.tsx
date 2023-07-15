import React from 'react'
import { Typography, Button, Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import { PiSignInLight } from 'react-icons/pi'
import { AiOutlineUserAdd } from 'react-icons/ai'
// profile menu component
const profileMenuItems = [
    {
        label: 'Sign In',
        icon: PiSignInLight,
        link: '/signin'
    },
    {
        label: 'Create Account',
        icon: AiOutlineUserAdd,
        link: '/signup'
    }
]

export function NavAuthSection() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-lg py-2 px-3 lg:ml-auto bg-myprimary "
                >
                    <p className="font-rubik -tracking-wide">Join Us</p>
                </Button>
            </MenuHandler>
            <MenuList className="p-1 bg-gray-200">
                {profileMenuItems.map(({ label, icon, link }, key) => {
                    return (
                        <Link
                            key={key}
                            to={link!}
                            className="hover:no-underline outline-none hover:outline-none active:outline-none focus:outline-none"
                        >
                            <MenuItem
                                key={label}
                                onClick={closeMenu}
                                className={`flex items-center gap-2 rounded text-black p-1  hover:bg-gray-400`}
                            >
                                {React.createElement(icon, {
                                    className: `h-6 w-6`,
                                    strokeWidth: 2
                                })}
                                <Typography
                                    as="span"
                                    variant="small"
                                    className="font-semibold text-black font-rubik -tracking-wider"
                                >
                                    {label}
                                </Typography>
                            </MenuItem>
                        </Link>
                    )
                })}
            </MenuList>
        </Menu>
    )
}

import React from 'react'
import { Typography, Button, Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react'
import {
    UserCircleIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    ShoppingBagIcon
} from '@heroicons/react/24/outline'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'

// profile menu component
const profileMenuItems = [
    {
        label: 'My Profile',
        icon: UserCircleIcon,
        link: '/profile',
        index: 0
    },
    {
        label: 'Edit Profile',
        icon: Cog6ToothIcon,
        index: 1
    },
    {
        label: 'Become a seller',
        icon: ShoppingBagIcon,
        index: 3
    },
    {
        label: 'Inbox',
        icon: InboxArrowDownIcon,
        index: 4
    },
    {
        label: 'Help',
        icon: LifebuoyIcon,
        index: 5
    },
    {
        label: 'Sign Out',
        logout: true,
        icon: PowerIcon,
        index: 6
    }
]

export function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const handleLogOut = async () => {
        console.log('loggout bitch')
    }

    return (
        <>
            <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                <MenuHandler>
                    <Button
                        variant="text"
                        color="blue-gray"
                        className="flex items-center border-2 border-gray-800 gap-1 rounded-3xl py-2 px-4 text-black bg-white"
                    >
                        <BiUser size={24} />
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`h-4 w-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
                        />
                    </Button>
                </MenuHandler>
                <MenuList className="p-2 rounded-md bg-gray-200 hover:outline-none">
                    {profileMenuItems.map(({ label, icon, link, index }, key) => {
                        const isLastItem = key === profileMenuItems.length - 1
                        return (
                            <Link
                                key={index}
                                to={link!}
                                className="hover:no-underline outline-none hover:outline-none active:outline-none focus:outline-none"
                            >
                                <MenuItem
                                    key={index}
                                    onClick={isLastItem ? handleLogOut : closeMenu}
                                    className={`flex items-center p-2 gap-2 rounded ${
                                        isLastItem
                                            ? 'hover:bg-red-600/10 focus:bg-red-500/10 active:bg-red-500/10'
                                            : 'hover:bg-gray-400'
                                    }`}
                                >
                                    {React.createElement(icon, {
                                        className: `h-5 w-5 ${isLastItem ? 'text-red-500' : 'text-black'}`,
                                        strokeWidth: 2
                                    })}
                                    <Typography
                                        as="span"
                                        variant="small"
                                        className="font-semibold -tracking-wider font-rubik"
                                        color={isLastItem ? 'red' : 'black'}
                                    >
                                        {label}
                                    </Typography>
                                </MenuItem>
                            </Link>
                        )
                    })}
                </MenuList>
            </Menu>
        </>
    )
}

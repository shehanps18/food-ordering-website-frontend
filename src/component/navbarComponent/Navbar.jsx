import React from 'react'
import { Avatar, IconButton, Badge, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"

export const Navbar = () => {
    return (
        <Box
            className='px-5 sticky top-0 z-50 py-[.8rem] lg:px-20 flex justify-between'
            style={{ backgroundColor: '#e91e63' }}
        >
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <li className='logo font-semibold text-gray-300 text-2xl'>Foodies</li>
            </div>
            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: '1.5rem' }} />
                    </IconButton>
                </div>
                <div className=''>
                    <Avatar sx={{ bgColor: "white", color: pink.A400 }}>C</Avatar>
                </div>
                <div>
                    <Badge badgeContent={2} color="primary">
                        <ShoppingCartIcon sx={{ color: 'black' }} />
                    </Badge>
                </div>
            </div>
        </Box>
    )
}

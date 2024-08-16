import React from 'react';
import { Avatar, IconButton, Badge, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';
import { store } from '../status/Store';

export const Navbar = () => {
    const { auth } = useSelector(store => store);
    const navigate = useNavigate();
    const handleAvatarClick=()=>{
        if(auth.user?.role==="ROLE_CUSTOMER"){
            navigate("/my-profile")
        }else{
            navigate("/admin/restaurant")
        }
    }

    const getInitials = (name) => {
        if (!name) return "U"; // fallback to "U" if the name is not available
        return name.charAt(0).toUpperCase();
    };

    return (
        <Box
            className='px-5 sticky top-0 z-50 py-[.8rem] lg:px-20 flex justify-between'
            style={{ backgroundColor: '#e91e63' }}
        >
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <li onClick={()=>navigate("/")} className='logo font-semibold text-gray-300 text-2xl'>Foodies</li>
            </div>
            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: '1.5rem' }} />
                    </IconButton>
                </div>
                <div>
                    {auth.user ? (
                        <Avatar onClick={handleAvatarClick} sx={{ bgcolor: pink.A400, color: 'white' }}>
                            {getInitials(auth.user?.fullName)}
                        </Avatar>
                    ) : (
                        <IconButton onClick={() => navigate("/account/login")}>
                            <Person />
                        </IconButton>
                    )}
                </div>
                <div>
                    <Badge badgeContent={2} color="primary">
                        <ShoppingCartIcon sx={{ color: 'black' }} />
                    </Badge>
                </div>
            </div>
        </Box>
    );
};

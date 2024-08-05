import { Card, Chip, IconButton } from '@mui/material';
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function RestaurantCard() {
    const isOpen = true; // Replace with actual condition
    const isFavorite = true; // Replace with actual condition
    
    return (
        <Card className='m-5 w-[18rem]'>
            <div className={`${isOpen ? 'cursor-pointer' : "cursor-not-allowed"} relative`}>
                <img 
                    className='w-full h-[10rem] rounded-t-md object-cover' 
                    src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt=""
                />
                <Chip 
                    size='small' 
                    className='absolute top-2 left-2'
                    color={isOpen ? "success" : "error"} 
                    label={isOpen ? "open" : 'closed'}
                />
            </div>
            <div className='p-4 textPart lg:flex w-full justify-between'>
                <div className='space-y-1'>
                    <p className='font-semibold text-lg'>European</p>
                    <p className='text-gray-500 text-sm'>Test 1</p>
                </div>
                <div>
                    <IconButton>
                        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                </div>
            </div>
        </Card>
    );
}

export default RestaurantCard;

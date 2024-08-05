import { Chip, IconButton } from '@mui/material';
import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const CartItem = () => {
    return (
        <div className='px-5'>
            <div className='lg:flex items-center lg:space-x-5'>
                <img
                    className='w-[5rem] h-[5rem] object-cover'
                    src='https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpcnlhbml8ZW58MHx8MHx8fDA%3D'
                    alt='Biriyani'
                />
                <div className='flex items-center justify-between lg:w-[70%] w-full'>
                    <div className='space-y-1 lg:space-y-3 w-full'>
                        <p className='font-semibold'>Biriyani</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-1'>
                                <IconButton>
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                                <div className='w-5 h-5 text-xs flex items-center justify-center'>
                                    {5}
                                </div>
                                <IconButton>
                                    <AddCircleOutlineIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p>Rs.1200.00</p>
                </div>
            </div>
            <div className='pt-3 space-x-2'>
                {[1, 1, 1].map((item) => <Chip label={"bread"} />)}

            </div>
        </div>
    );
};

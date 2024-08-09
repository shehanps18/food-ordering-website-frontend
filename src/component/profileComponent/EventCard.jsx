import { CardContent, CardMedia, Typography, Card, CardActions, IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
    return (
        <div>
            <Card sx={{ width: 345 }}>
                <CardMedia
                    sx={{ height: 345 }}
                    image='https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600' />
                <CardContent>
                    <Typography variant='h5'>
                        Sri lankan Fast Food
                    </Typography>
                    <Typography variant='body2'>
                        20% off for the first order
                    </Typography>
                    <div className='py-2 space-y-2'>
                        <p>{"colombo"}</p>
                        <p className='text-sm text-blue-500'>August 20, 2024 12.00 AM</p>
                        <p className='text-sm text-red-500'>August 21, 2024 12.00 AM</p>

                    </div>
                </CardContent>
                {true && <CardActions>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>}
            </Card>
        </div>
    )
}

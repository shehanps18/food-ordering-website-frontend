import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
    return (
        <Card className='flex jsutify-between items-center p-5'>
            <div className='flex items-center space-x-5'>
                <img className='h-16 w-16'
                    src="https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpcnlhbml8ZW58MHx8MHx8fDA%3D"
                    alt="" />
                <div>
                    <p>Biryani</p>
                    <p>Rs.1300.00</p>

                </div>
            </div>
            <div>
                <Button className='cursor-not-allowed'>Completed</Button>
            </div>

        </Card>
    )
}

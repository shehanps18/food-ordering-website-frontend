import React from 'react'
import { OrderCard } from './OrderCard'

const Orders = () => {
  return (
    <div className='flex items-center flex-col'>
      <h1 className='text-x1 text-center py-7 font-semibold'>My Order</h1>
      <div className='space-y-5 w-full lg:w-1/2'>
        {
          [1, 1, 1, 1].map((Item) => <OrderCard />)
        }

      </div>
    </div>
  )
}

export default Orders
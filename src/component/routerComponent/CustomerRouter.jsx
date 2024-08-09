import React from 'react'
import { Navbar } from '../navbarComponent/Navbar'
import { Routes, Route } from 'react-router-dom'
import {Home} from '../HomeComponent/Home'
import RestaurantDetails from '../restaurantComponent/RestaurantDetails'
import Cart from '../cartComponent/Cart'
import Profile from '../profileComponent/Profile'
import { Auth } from '../Auth/Auth'
export const CustomerRouter = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:register' element={<Home/>}/>
            <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/my-profile/*' element={<Profile/>}/>
        </Routes>
        <Auth/>
    </div>
  )
}

import { Divider, FormControl, Grid, RadioGroup, Typography, FormControlLabel, Radio } from '@mui/material';
import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { MenuCard } from './MenuCard';

const categories = [
    "pizza",
    "biriyani",
    "burger",
    "chicken",
    "rice"
]
const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian Only", value: "Vegetarian" },
    { label: "Non-Vegetarian", value: "non_Vegetarian" },
    { label: "Seasonal", value: "Seasonal" }
];
const menu = [1,1,1,1]

const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all")
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)
    }

    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>Home/Sri Lanka/Sri Lankan Fast Foods</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img
                                className='w-full h-[60vh] object-cover'
                                src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
                                alt=""
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img
                                className='w-full h-[50vh] object-cover'
                                src="https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt=""
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img
                                className='w-full h-[50vh] object-cover'
                                src="https://media.istockphoto.com/id/1030953200/photo/customers-enjoying-meals-in-busy-restaurant.jpg?s=612x612&w=0&k=20&c=9D3S41sLHNEsIbkJvpdjHiXqpKSxkvxMRTQpPeQ_9Tg="
                                alt=""
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5 '>
                    <h1 className='text-4xl font-semibold'>
                        Sri Lankan Fast Food
                    </h1>
                    <p className='mt-1 text-gray-500'>Discover the delicious flavors of Sri Lankan fast food.</p>
                    <div className='space-y-3 mt-3'>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <LocationOnIcon />
                            <span>
                                Sri Lanka, Kurunegala
                            </span>
                        </p>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <CalendarTodayIcon />
                            <span>
                                Mon To Sat 9.00 a.m - 10.00 p.m
                            </span>
                        </p>
                    </div>
                </div>
            </section>
            <Divider />
            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter '>
                    <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                        <div className='box space-y-5 lg:sticky top-28'>
                            <div>
                                <Typography varient="h5" sx={{ paddingBottom: "1rem" }}>
                                    Food Type
                                </Typography>
                                <FormControl className='py-10 spae-y-5' component={"fieldset"}>
                                    <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                        {foodTypes.map((item) => <FormControlLabel
                                            key={item.value}
                                            value={item.value}
                                            control={<Radio />} label={item.label} />)}
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                    </Typography>
                    <Divider></Divider>
                    <div>
                        <Typography varient="h5" sx={{ paddingBottom: "1rem" }}>
                            Food Category
                        </Typography>
                        <FormControl className='py-10 spae-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                {categories.map((item) => <FormControlLabel
                                    key={item}
                                    value={item}
                                    control={<Radio />} label={item} />)}
                            </RadioGroup>
                        </FormControl>
                    </div>

                </div>

                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    <Typography variant='h5'>
                        {menu.map((item)=><MenuCard/>)}
                    </Typography>

                </div>
            </section>
        </div>
    );
}

export default RestaurantDetails;

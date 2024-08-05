import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, FormGroup, FormControlLabel, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';

const demo = [
    {
        category: "Nuts & seeds",
        ingredient: ["Cashews"]
    },
    {
        category: "protein",
        ingredient: ["Ground beef", "Bacon strips"]
    }
]
export const MenuCard = () => {
    const handleCheckBoxChange=(value)=>{
        console.log("value")
    }

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-5 w-full'>
                            <img className='w-[7rem] h-[7rem] object-cover rounded-md' src='https://img.freepik.com/free-photo/grilled-cheeseburger-sesame-bun-with-fresh-toppings-generative-ai_188544-12325.jpg' alt='Burger' />
                            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                                <p className='font-semibold text-xl'>Burger</p>
                                <p>Rs.499.00</p>
                                <p className='text-gray-400'>We got delicious foods</p>
                            </div>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <form>
                        <div className='flex gap-5 flex-wrap'>
                            {
                                demo.map((item) =>
                                    <div>
                                        <p>{item.category}</p>
                                        <FormGroup>
                                            <FormGroup>
                                                {item.ingredient.map((item) => <FormControlLabel
                                                    control={<Checkbox onChange={()=>
                                                    handleCheckBoxChange(item)} />} label={item} />)}

                                            </FormGroup>

                                        </FormGroup>
                                    </div>
                                )
                            }
                        </div>
                        <div className='pt-5'>
                            <Button variant='contained' disabled={false} type='submit'>{true?"Add to cart":"Out of stock"}</Button>
                        </div>
                    </form>
                </AccordionDetails>

            </Accordion>
        </div>
    );
}

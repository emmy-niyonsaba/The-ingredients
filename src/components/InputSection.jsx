import React from 'react'

import { useState } from 'react'
import ListItems from './ListItems'
const InputSection = () => {


    const [ingredient, setIngredient] = useState([])

     

    const handlerSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const ingredientValue = form.ingredient.value
       if (ingredientValue.trim() !== '') {
        setIngredient([...ingredient, ingredientValue])
       }    
        form.reset()
    }
    

  return (
    <>
    
        <main className=' p-5'> 
            <form action=""
            onSubmit={handlerSubmit}
             className=' flex gap-[12px] p justify-center items-center '>
                <input
                 type="text" 
                 name="ingredient" 
                 placeholder=' e.g Agatogo' 
                 className=' p-3 rounded-md  border-gray-500 border-2' />

                 <button 
                 className=' p-3 rounded-md bg-blue-500 text-white'>+Add ingredient
                 
                 </button>

            </form>

        </main>
        <ListItems ingredients={ingredient} />
    </>


  )
}

export default InputSection

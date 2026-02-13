import React from 'react'

import { useState } from 'react'
import ListItems from './ListItems'
import Result from './Result'
const InputSection = () => {


    const [ingredient, setIngredient] = useState([])
    const [isshown, setIsshow] = useState(false)



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
                        type='submit'
                        className=' p-3 rounded-md bg-blue-500 text-white'>+Add ingredient

                    </button>

                </form>

            </main>
            <ListItems ingredients={ingredient} setIngredients={setIngredient} />

            {ingredient.length >3? (
                <div className=' max-w-2xl mx-auto mt-10 bg-white shadow-xl rounded-2xl p-8 border border-gray-100 flex items-center justify-between'>

                    <div className=' flex flex-col gap-2.5'>
                        <h3 className=' text-2xl font-bold'>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button className=' bg-blue-500 p-3 rounded-[13px] text-white font-medium' onClick={() => {
                        setIsshow(!isshown)
                    }}>Get a recipe</button>


                </div>
            ) : null}


            {isshown?(
                <Result></Result>
            ):null}

        </>


    )
}

export default InputSection

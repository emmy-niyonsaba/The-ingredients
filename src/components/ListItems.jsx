

import React from 'react'

function ListItems({ ingredients }) {

    console.log(ingredients)
    return (
        <div className=' m-9'>
            {
                ingredients.map((ingredient, index) => (
                    <div>
                        <ul className=' list-disc'>
                            {ingredient.trim() !== '' && (
                                <li key={index}>{ingredient}</li>
                            )}

                        </ul>
                    </div>
                ))

            }
        </div>
    )
}

export default ListItems

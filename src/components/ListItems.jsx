function ListItems({ ingredients }) {
    console.log(ingredients)
    return (
        <div className=' m-9'>
            <h1 className=' text-4xl font-bold'>Ingridients in hand:</h1>

            <ul>

            {
               ingredients.map((ingredient, index) => (
                    <li key={index} className=' text-2xl font-semibold'>{ingredient}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default ListItems

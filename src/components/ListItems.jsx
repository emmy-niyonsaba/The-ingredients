function ListItems({ ingredients, setIngredients }) {

    const deleteIngredient = (indexToDelete) => {
        setIngredients(prevIngredients =>
            prevIngredients.filter(
                (_, index) => index !== indexToDelete
            )
        );
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white shadow-xl rounded-2xl p-8 border border-gray-100">

            <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
                Ingredients in Hand
            </h1>

            <ul className="space-y-3">
                {ingredients.map((ingredient, index) => (
                    <li
                        key={index}
                        onClick={() => deleteIngredient(index)}
                        className="flex items-center gap-3 text-lg text-gray-700 bg-gray-50 hover:bg-red-50 cursor-pointer transition-colors duration-200 px-4 py-3 rounded-lg shadow-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-black"></span>
                        {ingredient}
                    </li>
                ))}
            </ul>

            {ingredients.length === 0 && (
                <h2 className="text-gray-500 italic mt-4 text-xl">
                    No ingredients added yet. Start by adding some!
                </h2>
            )}
        </div>
    );
}

export default ListItems;

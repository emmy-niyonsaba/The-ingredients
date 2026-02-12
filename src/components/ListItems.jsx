function ListItems({ ingredients }) {
    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white shadow-xl rounded-2xl p-8 border border-gray-100">

            <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
                Ingredients in Hand
            </h1>

            <ul className="space-y-3">
                {ingredients.map((ingredient, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-3 text-lg text-gray-700 bg-gray-50 hover:bg-green-50 transition-colors duration-200 px-4 py-3 rounded-lg shadow-sm"
                    >
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {ingredient}
                    </li>
                ))}
            </ul>

            {ingredients.length === 0 && (
                <h1 className="text-gray-500 italic mt-4 text-2xl">No ingredients added yet. Start by adding some!</h1>

            )}
        </div>
    );
}

export default ListItems;

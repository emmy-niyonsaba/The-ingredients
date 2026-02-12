const submitDescription = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  const cars = formData.getAll("cars");
  const allData = { ...data, cars };
  console.log(allData);
};

function Description() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={submitDescription}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6"
      >
        <section className="space-y-4">
          <input
            type="text"
            name="email"
            placeholder="example@gmail.com"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </section>

        <section className="space-y-3">
          <h1 className="text-xl font-semibold text-gray-800">
            Choose Gender
          </h1>

          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="gender" value="female" />
              Female
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="gender" value="male" />
              Male
            </label>
          </div>
        </section>

        <section className="space-y-3">
          <h1 className="text-xl font-semibold text-gray-800">
            Choose Your Fav Cars
          </h1>

          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="cars" value="audi" />
              Audi
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="cars" value="bmw" />
              BMW
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="cars" value="ford" />
              Ford
            </label>
          </div>
        </section>

        <section className="space-y-3">
          <h1 className="text-xl font-semibold text-gray-800">
            Choose Your Fav Color
          </h1>

          <select
            name="favColor"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="" disabled>
              Select a color
            </option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
          </select>
        </section>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 text-white font-semibold py-3 rounded-lg shadow-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Description;

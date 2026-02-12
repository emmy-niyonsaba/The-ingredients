const submitDescription = (e) => {
}

function Description() {
    return (
        <>
            <div className=" flex justify-center p-10">
                <form action={submitDescription} method='get'>

                    <section className=" flex flex-col gap-2 justify-center" >

                        <input type="text" name="email" placeholder='example@gamail.com'
                            className=" p-3 border-2 border-gray-500 w-50 rounded"
                        />

                        <input type="password" name="password" placeholder="Password "
                            className=" p-3 border-2 border-gray-500 w-50 rounded"
                        />
                    </section>
                    <button className=" bg-blue-500 p-3 rounded-2xl flex items-center justify-cente font-bold text-white">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Description

import React from 'react'

const InputSection = () => {
  return (
    <>
    
        <main className=' p-5'> 
            <form action="" className=' flex gap-[12px] p justify-center items-center '>
                <input
                 type="text" 
                 name="ingredient" 
                 placeholder=' e.g Agatogo' 
                 className=' p-3 rounded-md  border-gray-500 border-2' />

                 <button 
                 className=' p-3 rounded-md bg-blue-500 text-white'>Add ingredient
                 
                 </button>

            </form>

        </main>

    </>
  )
}

export default InputSection

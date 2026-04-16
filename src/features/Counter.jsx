import React, { useState } from 'react'

const Counter = () => {

   const [count, setCount] = useState(0);

   const [toggle, setToggle] = useState(false);

//    function handleCount(){
//     setCount(count+5);
//    }

const handleToggle = () => {
    setToggle(!toggle);

    console.log(toggle);
}

  return (
    <>
            <p className='bg-blue-800 text-white text-2xl'>My CURRENT Count is {count}</p>

            <button onClick={() => setCount(count+1)} className='bg-blue-600 px-10 py-2 text-white hover:bg-red-600'>Update Counter</button>

            <button onClick={handleToggle} className='bg-green-500 text-white px-10 py-2'>Toggle Btn</button>

            <div className={`${toggle ? "block" : "hidden"}`}>
                My Section of Code....
            </div>
    </>
  )
}

export default Counter
import React, { useEffect, useRef, useState } from 'react'

const ComponentsTypes = () => {

    const [render, setRender] = useState(false);
    const countRef = useRef(0);

    const handleCountLogic = () => {
        console.log(countRef.current++);

        setRender(!render);

    }

    return (
        <>
            <p>Controlled vs UnControlled Components</p>

            <p>My Count is {countRef.current}</p>
            {/* <button onClick={() => setCount(count + 1)} className='bg-blue-600 text-white'>Add</button> */}
            <button onClick={handleCountLogic} className='bg-blue-600 text-white'>Add</button>
        </>
    )
}

export default ComponentsTypes

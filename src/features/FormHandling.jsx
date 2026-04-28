import React, { useRef, useState } from 'react'

const FormHandling = () => {
    // const [name, setName] = useState("");
    const nameRef = useRef("");

    const handleSubmission = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmission}>
                {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> */}
                <input type="text" ref={nameRef} />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default FormHandling

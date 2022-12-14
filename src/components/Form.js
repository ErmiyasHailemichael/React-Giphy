import { useState } from "react";

const Form = (props) => {
    const [giphyTitle, setGiphyTitle] = useState('')

    const handleChange = (event) => {
        setGiphyTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        props.getGiphy(giphyTitle)
    }
    return (
        <div>
            {/* <h1>The Form component</h1> */}
            {/* i was trying to add the search button but it ended up not searing instead start searing randomly */}
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={giphyTitle} />
                <input type='submit' value='Random' />
            </form>
        </div>
    )
    // return <h1> This is FORM components</h1>
 }
 
 export default Form;
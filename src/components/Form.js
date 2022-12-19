import { useState } from "react";
//my form to use the search giphy
// const Form = ({ getTag }) => {
//     const [form, setForm] = useState({
//         input: ''
//     })
//     const handleChange = (e) => {
//         setForm({input: e.target.value})
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         getTag(form.input)
//         setForm({input: ''})
//     }
//     return (
//         <>
//             <h1>Enter keyword for a random sticker...</h1>
//             <form className='form-size' onSubmit={handleSubmit}>
//                 <input
//                 type='text'
//                 value={form.input}
//                 onChange={handleChange}
//                 name='input'
//                 className='input-btn'    
//                 />
//                 <input
//                     className='btn'
//                     type='submit'
//                     value='SEARCH' />
//             </form>
//         </>

//     )
// }
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
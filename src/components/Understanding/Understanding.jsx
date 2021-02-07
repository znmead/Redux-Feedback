import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Understanding() {
    const history = useHistory(); // 
    const dispatch = useDispatch();

    let [understanding, setUnderstanding] = useState('');

    const resetInput = event => {
        console.log('Resetting input');
        setUnderstanding('')
    }

    const handleSubmit = event => {
        event.preventDefault();
        let understandings = {
            understanding: understanding
        };
        dispatch({ type: 'SET_UNDERSTANDING', payload: understandings }); // payload is var
        console.log(`In understanding form`, { understanding });
        history.push('/Supported')
        resetInput();
    }

    return (
        <div id='understanding'>
            <h1>How well are you understanding the content? Please enter as a 1-5 below. </h1>

            <form className='add-understanding' onSubmit={handleSubmit}>
                <input
                    id='understanding'
                    required // input validation works
                    type='number'
                    placeholder='Understanding here'
                    value={understanding}
                    onChange={(event) => setUnderstanding(event.target.value)}
                />
                <button type="submit">
                    Next
                </button>
            </form>
        </div>
    )

}

export default Understanding;
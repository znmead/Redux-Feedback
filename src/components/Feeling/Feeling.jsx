import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import { useSelector } from 'react-redux'; 

function Feeling() {
    const history = useHistory();
    const dispatch = useDispatch();

    let [feeling, setFeeling] = useState('');

    const resetInput = event => {
        console.log('Resetting input');
        setFeeling('')
    }

    const handleSubmit = event => {
        event.preventDefault();
        let feelings = {
            feeling: feeling
        };
        dispatch({ type: 'SET_FEELING', payload: feelings }); // payload is var
        console.log(`In feeling form`, { feeling });
        history.push('/Understanding')
        resetInput();
    }

    return (
        <div id='feeling'>
            <h1>How are you feeling today? Please enter your feelings as a 1-5 below. </h1>

            <form className='add-feeling' onSubmit={handleSubmit}>
                <input
                    id='feeling'
                    required // input validation works
                    type='number'
                    placeholder='Feelings here'
                    value={feeling}
                    onChange={(event) => setFeeling(event.target.value)}
                />
                <button type="submit">
                    Next
                </button>
            </form>
        </div>
    )

}

export default Feeling;
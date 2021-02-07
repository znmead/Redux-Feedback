import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import { useSelector } from 'react-redux'; 


function Feeling() {
    const history = useHistory(); // 
    const dispatch = useDispatch();

    let [feeling, setFeeling] = useState('');

    const resetInput = event => {
        console.log('Resetting input');
        setFeeling('')
    }

    const handleSubmit = event => {
        event.preventDefault();
        let feeling = {
            feeling: feeling
        };
        dispatch({ type: 'SET_FEELING', payload: feeling });
        console.log(`in feeling form`, { feeling });
        history.push('/Review')
        resetInput();
    }

    return (
        <div id='feeling'>
            <h1>Enter your feelings as 1-5</h1>

            <form className='add-feeling' onSubmit={handleSubmit}>
                <input
                    id='feeling'
                    required
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
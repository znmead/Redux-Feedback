import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Supported() {
    const history = useHistory(); // 
    const dispatch = useDispatch();

    let [support, setSupport] = useState('');

    const resetInput = event => {
        console.log('Resetting input');
        setSupport('')
    }

    const handleSubmit = event => {
        event.preventDefault();
        let supported = {
            support: support
        };
        dispatch({ type: 'SET_SUPPORT', payload: supported }); // payload is var
        console.log(`In supported form`, { support });
        history.push('/Comments')
        resetInput();
    }

    return (
        <div id='support'>
            <h1>How well are you being supported? Please enter as a 1-5 below. </h1>

            <form className='add-support' onSubmit={handleSubmit}>
                <input
                    id='support'
                    required // input validation works
                    type='number'
                    placeholder='Support here'
                    value={support}
                    onChange={(event) => setSupport(event.target.value)}
                />
                <button type="submit">
                    Next
                </button>
            </form>
        </div>
    )

}

export default Supported;
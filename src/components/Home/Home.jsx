import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import { useSelector } from 'react-redux'; 


function Home() {
    const history = useHistory(); // 
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        history.push('/Feeling')
    }

    return (
        <div id='feeling'>
            <h1>Howdy. Thanks for your feedback.
                Would you like to leave another? </h1>

            <form className='add-home' onSubmit={handleSubmit}>


                <button type="submit">
                    New Feedback
                </button>
            </form>
        </div>
    )

}

export default Home;
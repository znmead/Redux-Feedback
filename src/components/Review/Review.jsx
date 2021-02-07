import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector} from 'react-redux';
import axios from 'axios';



function Review() {
    const history = useHistory(); 

    // get feedback from the store
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);
    
    const handleSubmit = event => {
        event.preventDefault();
        let comment = {
            comments: comments
        };
        dispatch({ type: 'SET_COMMENTS', payload: comment }); // payload is var
        console.log(`In comments form`, { comments });
        history.push('/Review')
        resetInput();
    }

  

    return (
        <div id='comments'>
            <h1>Please review your feedback and hit Submit.</h1>

            <form className='add-comments' onSubmit={handleSubmit}>
                <input
                    id='comments'
                    type='text'
                    placeholder='Comments here'
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )

}

export default Review;
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Comments() {
    const history = useHistory();
    const dispatch = useDispatch();

    let [comments, setComments] = useState('');

    const resetInput = event => {
        console.log('Resetting input');
        setComments('')
    }

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
            <h1>Do you have any comments for review?</h1>

            <form className='add-comments' onSubmit={handleSubmit}>
                <input
                    id='comments'
                    type='text'
                    placeholder='Comments here'
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                />
                <button type="submit">
                    Next
                </button>
            </form>
        </div>
    )

}

export default Comments;
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2'

function Review() {
    const history = useHistory();

    // get feedback from the store
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    const handleSubmit = event => {
        axios.post('/feedback',
            {
                feeling: feeling.feeling,
                understanding: understanding.understanding,
                support: support.support,
                comments: comments.comments
            })
            .then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            })

        Swal.fire({
            title: 'Thanks for submitting your feedback?',
            text: 'Have a great day!',
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#neongreen',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aight!'
        })
            .then((result) => history.push('/')
            )
    }

    return (
        <div id='review'>
            <h1>Please review your feedback and hit Submit.</h1>

            <p><span>Feelings: {feeling.feeling}</span></p>
            <p><span>Understanding: {understanding.understanding}</span></p>
            <p><span>Support: {support.support}</span></p>
            <p><span>Comments: {comments.comments}</span></p>
            <button type="submit" onClick={handleSubmit}>Submit</button>

        </div>
    )

}

export default Review;
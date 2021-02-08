import React from 'react';
import { useSelector } from 'react-redux'


function FeedBackList() {
    const feedBackList = useSelector(store => store.feedBackList);
    console.log(feedBackList)

    return (
        <div>
           
        </div>
    );
}

export default FeedBackList;
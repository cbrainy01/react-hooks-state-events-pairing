import React from "react"

function Votes({onUpClick, onDownClick, upvoteCount, downvoteCount}) {
 

    function handleClickUp(event) {
        onUpClick(event.target.value);
    }
    function handleClickDown(event) {
        onDownClick(event.target.value);
    }

    return(
        <>
          <button onClick={handleClickUp} value={upvoteCount}> {upvoteCount} upvote</button>
          <button onClick={handleClickDown} value={downvoteCount}> {downvoteCount} downvote</button>
        </>
    );
}

export default Votes;

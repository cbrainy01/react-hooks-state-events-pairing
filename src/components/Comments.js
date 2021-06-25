import React, { useState } from "react"

function Comments({commentsArray}) {
    
    const [showComments, setShowComments] = useState(true);
    const commentList = commentsArray.map( (comment) =>{
        return(
            <div key={comment.id}>
               <h4>{comment.user}</h4>
               <p>{comment.comment}</p>
            </div>
        );
    } );

    function handleClick() {
        setShowComments(!showComments);
    }

    return(
        <div >
          <button onClick={handleClick}>{showComments? "hide comments" : "show comments"}</button>
          <div className={showComments? "show" : "hide"}>
            <h3> {commentList.length} Comments</h3>
            {commentList}
          </div>
        </div>
    );
}

export default Comments;
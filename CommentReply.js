import React, { useState } from 'react'

const CommentReply = (props) => {
    const [isliked, setIsliked] = useState(false)

    return (
        <div className="comment-text">
            <h5>{props.name}</h5>
            <p>{props.content}</p>
        </div>
    );
}

export default CommentReply;
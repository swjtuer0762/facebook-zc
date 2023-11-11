import React, { useState } from "react"

const Post = (props) => {
    const [numLikes, setNumLikes] = useState(0)
    return (
        <div className="post">
            <h3>{props.name}</h3>
            <p>{props.text}</p>
            <button
                onClick={() => {
                    setNumLikes(numLikes + 1);
                }}
            >
                <img src="likeIcon.png" />
                {numLikes}
            </button>
        </div>
    );
}

export default Post;
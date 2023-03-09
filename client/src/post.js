import React from "react";
import './post.css'

const Post = () => {
    return (
        <>
            <div className="main">
                <h1>Hello welcome to my Post App</h1>
                <div className="postbox">
                    Comment: <textarea className="comment" /> <br/>
                    <button className="btn">Reply</button>
                    <button className="btn1">Edit</button>
                    <button className="btn1">Delete</button>
                </div>
            </div>
        </>
    )
}

export default Post
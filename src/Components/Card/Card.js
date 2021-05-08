import React, { useState } from 'react';
import './Card.css'

const Card = (props) => {

    const [comment, setComment] = useState("");
    const postComment = () => {
        if (comment !== "") {
            props.onPostClicked(props.id, comment)
        }
        setComment("")
    }

    return (
        <>
            <div data-test="component-card" className="card">
                <div className="image" onClick={() => props.onImageClick(props.url)}>
                    <img src={props.url} alt="Avatar" style={{ width: "100%", height: "150px" }} ></img>
                </div>
                <div className="container">
                    <div className="picture-subInfo">
                        <div className="like-styles">
                            <div data-test="numberOfLikes">
                                {props.likes}
                            </div>
                            <div style={{ cursor: "pointer", marginLeft: "5px" }} data-test="button-like" onClick={() => props.onLikeClicked(props.id)}>
                                {props.liked ? "Unlike" : "Like"}
                            </div>
                        </div>
                        <div className="categoryTypeStyles">{props.category}</div>
                    </div>
                    <div data-test="commentBox" className="commentBox">
                        <input placeholder={"Type your comment here..."} className="commentText" type="text" value={comment} onChange={(event) => setComment(event.target.value)} />
                        <div data-test="button-post" className="commentButton" onClick={() => postComment()} >Post </div>
                    </div>
                    <div className="comments">{props.comments ? props.comments
                        .map((item, key) => <div style={{ backgroundColor: "wheat", borderBottom: "1px solid blue" }}>
                            <div data-test="comment" className="comment">{item}</div>
                            <div className="deleteIcon" onClick={() => props.onDeleteClick(props.id, key)}>
                                <i class="fa fa-trash"></i>
                            </div>
                        </div>) : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
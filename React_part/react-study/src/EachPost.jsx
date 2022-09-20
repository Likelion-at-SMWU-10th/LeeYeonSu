import React from "react";
import { useNavigate } from "react-router-dom";
import { EachPostLi, PostLink } from './styledComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

function EachPost({ title, postId }) {
    const navigate = useNavigate();
    const goPost = () => {
        navigate(`${'/post/' + postId}`);
    };
    return (
        <EachPostLi onClick={goPost}>
        <div>
            <FontAwesomeIcon icon={faLocationPin} />
            <PostLink>{title}</PostLink>
        </div>
    </EachPostLi>
    );
}

export default EachPost;
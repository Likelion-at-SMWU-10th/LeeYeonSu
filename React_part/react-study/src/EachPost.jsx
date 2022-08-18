import {EachPostLi, PostLink, PostRepl} from './styledComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EachPost({ title, repleCount }) {
    return (
        <EachPostLi>
        <div>
            <FontAwesomeIcon icon={faLocationPin} />
            <PostLink>{title}</PostLink>
        </div>
        <PostRepl>{repleCount}</PostRepl>
    </EachPostLi>
    );
}

export default EachPost;
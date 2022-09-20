import React from 'react';
import { PostSection } from './styledComponent';

const WriteTitle = () => {
    return (
        <PostSection>
            <WriteTitle>
                글쓰기
            </WriteTitle>
        </PostSection>
    );
};

export default React.memo(WriteTitle);
import React, { useState } from 'react';
import axios from 'axios';
import {
    PostSection,
    PostSubmit,
    PostSubmitDiv,
    PostWriteDiv,
} from './styledComponent';
import WriteTitle from './WriteTitle';
import InputPost from './InputPost';
import { useNavigate } from 'react-router-dom';

const SubmitComponent = React.memo(({onSubmit}) => (
    <PostSubmitDiv>
        <PostSubmit onClick={onSubmit}>작성완료</PostSubmit>
    </PostSubmitDiv>
));

const WritePost = ({apiUrl}) => {
    const [inputs, setInputs] = useState({
        title: '',
        contents: '',
    });

    const { title, contents } = inputs;

    const testw = 1;
    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target에서 name과 value를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value, // name 키를 가진 값을 value로 설정
        });
    };
    
    const navigate = useNavigate();

    const onSubmit = () => {
        axios.post(`${apiUrl}/posts/`, {
            title: inputs.title,
            contents: inputs.contents,
            repls: [],
        }).then(() => {
            navigate(..."/");
        });
    };
    return (
        <PostSection>
            <WriteTitle testw={testw} />
            <PostWriteDiv>
                <InputPost onChange={onChange} >
                    title={title}   contents={contents}
                </InputPost>
            </PostWriteDiv>
            <PostSubmitDiv>
                <PostSubmit>작성완료</PostSubmit>
            </PostSubmitDiv>
            <SubmitComponent onSubmit={onSubmit} />
        </PostSection>
    );
};

export default WritePost;
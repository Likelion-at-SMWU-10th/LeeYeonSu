import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
    PostSection,
    PostTitleDiv,
    PostTitle,
    LoadingDiv,
    LoadingImg,
    PostReplDiv,
    ReplTitleDiv,
    ReplWriter,
    Repl,
    WriterDiv,
    ReplInput,
    ReplSubmitDiv,
 } from './styledComponent';
import axios from 'axios';
import { useParams } from "react-router-dom"

const postData = {
    title: `오늘 점심은`,
    contents: `오늘은 학교 앞 또와또에서 떡불을 먹었어요. 마약볶음밥까지 볶아서 먹는데 진짜 너무 맛있었답니다!`,
}
const replData = [
    {id: 2, content: `반가워요!` },
    {id: 3, content: `떡볶이 최고!`},
];

// 글 memo
const PostAndRepl = React.memo(
    ({ post, postLoading, replCount, replLoading, repls }) => {
        return (
            <>
                {" "}
                <PostTitleDiv>
                    <PostTitle>{post && post.title}</PostTitle>
                </PostTitleDiv>
                {postLoading ? (
                    <LoadingDiv>
                        <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
                    </LoadingDiv>
                ) : (
                    <PostReplDiv>{post && post.contents}</PostReplDiv>
                )}
                {/* post contents */}
                <ReplTitleDiv>댓글 {replCount} </ReplTitleDiv>
                {replLoading ? (
                    <LoadingDiv>
                        <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
                    </LoadingDiv>
                ) : (
                    repls &&
                    repls.map((element) => (
                        <PostReplDiv key={element}>
                            <ReplWriter>익명</ReplWriter>
                            <Repl>{element}</Repl>
                        </PostReplDiv>
                    ))
                )}
            </>
        );
    }
);

const ShowPost = ({ apiUrl }) => {
    const [post, setPost] = useState(null);
    const [repls, setRepls] = useState([]);
    const [postLoading, setPostLoading] = useState(true);
    const [replLoading, setReplLoading] = useState(true);    
    const Params = useParams();
    const replInput = useRef();

    useEffect(() => {
        axios.get(`${apiUrl}posts/${Params.postId}`).then((response) => {
            console.log(response);
            setPost(response.data);
            setPostLoading(false);
            setRepls(response.data.repls);
            setReplLoading(false);
            replInput.current.focus();
        });
    }, []);
    
    // // useEffect 2개 사용하기
    // useEffect(() => {
    //     setTimeout(() => {
    //         setPost(postData);
    //         setPostLoading(false);
    //     }, 1000);
    // });

    // useEffect(() => {
    //     setTimeout(() => {
    //         setRepls(replData);
    //         setReplLoading(false);
    //     }, 3000);
    //     replInput.current.focus();
    // });

    // input창 상태 관리
    const [repl, setRepl] = useState("");

    const onChange = (e) => {
        setRepl(e.target.value);
    };

    const countRepls = (repls) => {
        console.log('리뷰 개수를 세는 중...');
        return repls.length;
    };

    // for useMemo
    const replCount = useMemo(() => countRepls(repls), [repls]);

    const onSubmitRepl = () => {
        axios.post(`${apiUrl}repl`, {
            contents: repl,
            post: Params.postId,
        }).then(() => {
            // 새로고침
            window.location.reload();
        });
    };

    if (!Params.postId) {
        return <PostSection>잘못된 접근입니다.</PostSection>;
    }

    return (
        <div>
            <PostSection>
                <PostAndRepl
                    post={post}
                    postLoading={postLoading}
                    replCount={replCount}
                    replLoading={replLoading}
                    repls={repls}
                />
                <WriterDiv>
                    <ReplInput onChange={onChange} value={repl} ref={replInput} />
                    <ReplSubmitDiv onClick={onSubmitRepl}>
                        <span>입력</span>
                    </ReplSubmitDiv>
                </WriterDiv>
            </PostSection>
        </div>
    );
};

export default ShowPost;

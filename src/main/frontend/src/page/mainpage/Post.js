import React from 'react';
import styled from 'styled-components';

const Post = () => {
    return (
        <PostContainer>
            <PostTitle>배당금 재투자 계산기</PostTitle>
            <PostDate>postdate</PostDate>
            <PostContent>
                <p>post...</p>
                <p>here...</p>
                <p>here...</p>
                <p>here...</p>
                <p>here...</p>
                <p>here...</p>
                <p>here...</p>
                <p>here...</p>
                <p>here...</p>
                <p>here...</p>
                <p>here...</p>
                <p>here...</p>
                <p>here...</p>
                <p>here...</p>
            </PostContent>
        </PostContainer>
    );
};

const PostContainer = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const PostTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;font-family: "Hanna", sans-serif;
`;

const PostDate = styled.p`
  font-size: 1rem;
  color: #888;
`;

const PostContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
`;

export default Post;

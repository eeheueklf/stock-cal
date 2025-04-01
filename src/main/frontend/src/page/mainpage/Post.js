import React from 'react';
import styled from 'styled-components';

const Post = () => {
    return (
        <PostContainer>
            <PostTitle>Blog Post Title</PostTitle>
            <PostDate>April 1, 2025</PostDate>
            <PostContent>
                <p>This is the content of the blog post...</p>
                <p>Write more about the topic here...</p>
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
  color: #333;
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

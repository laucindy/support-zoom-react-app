import React, { useEffect, useState } from "react";
import './Post.scss'
import { gql, useQuery } from '@apollo/client';

const Post = (props) => {
  const post = props.post;

  const GET_COMMENTS_FOR_POST = gql`
    query($postId: ID!) {
      commentsFromPost(postId: $postId) {
        content,
        user {
          name
        }
      }
    }
`;

  const [commentsCount, setCommentsCount] = useState(0);
  const { loading, error, data } = useQuery(GET_COMMENTS_FOR_POST, { variables: { postId: post.id } })
  
  useEffect(() => {
    if ((data != undefined) && (data.commentsFromPost != undefined)) {
      setCommentsCount(data.commentsFromPost.length);
    }
  }, [data]);

  return (
    <div className="post">
      <div className="post__info">
        <p className="post__title">
          <span className="post__title-name">{post.user.name}</span> - {post.dateCreated}
        </p>
        <p className="post__content">{post.content}</p>
        <p className="post__followers">{commentsCount} comment{commentsCount > 1 ? 's' : ''}</p>
      </div>
    </div>
  )
};

export default Post;

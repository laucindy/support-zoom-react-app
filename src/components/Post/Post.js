import React, { useEffect, useState } from "react";
import './Post.scss'
import { useQuery } from '@apollo/client';
import GET_COMMENTS_FOR_POST from './PostCommentsQuery';

const Post = (props) => {
  const post = props.post;

  const [commentsCount, setCommentsCount] = useState(0);
  const { _loading, _error, data } = useQuery(GET_COMMENTS_FOR_POST, { variables: { postId: post.id } })
  
  useEffect(() => {
    if ((data != undefined) && (data.commentsFromPost != undefined)) {
      setCommentsCount(data.commentsFromPost.length);
    }
  }, [data]);

  return (
    <div className="post">
      <div className="post__info">
        <p className="post__title">{post.title}</p>
        <p className="post__subtitle">{post.user.name} - {post.dateCreated}</p>
        <p className="post__content">{post.content}</p>
        <p className="post__category">Category: {post.category}</p>
        <p className="post__tags">Tags: {post.tag1}, {post.tag2}, {post.tag3}</p>
        <p className="post__comments">{commentsCount} comment{(commentsCount == 1) ? '' : 's'}</p>
      </div>
    </div>
  )
};

export default Post;

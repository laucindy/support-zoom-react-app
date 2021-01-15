import React from "react";
import './Posts.scss';
import Post from '../Post';
import { useQuery } from '@apollo/client';
import GET_POSTS from './PostsListQuery';

const PostsList = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="posts__column">
      <h1>Posts</h1>
      {data.posts.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default PostsList;

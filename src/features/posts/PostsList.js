import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import React from 'react';
import './PostsList.scss';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map(post => (
    <article className="posts-list__post" key={post.id}>
      <h3 className="posts-list__post-title">{post.title}</h3>
      <p className="posts-list__content">{post.content.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ))
  return (
    <section className="posts-list">
      <h2 className="posts-list__title">Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";
import React from 'react';
import './AddPostForm.scss';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕'
}

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        className="posts-list__button"
        key={name}
        type='button'
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    )
  })
  return (
    <div className="posts-list__button-container">{reactionButtons}</div>
  )
}

export default ReactionButtons
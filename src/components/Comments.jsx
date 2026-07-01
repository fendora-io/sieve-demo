import React from 'react';

export function CommentBody({ html }) {
  return (
    <div
      className="comment-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

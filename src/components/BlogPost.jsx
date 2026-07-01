import React from 'react';
import DOMPurify from 'dompurify';

export function BlogPost({ content }) {
  const sanitized = DOMPurify.sanitize(content);
  return (
    <article
      className="blog-post"
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
}

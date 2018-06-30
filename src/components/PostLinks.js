import React from 'react';
import Button from '../components/Button';

const PostLinks = props => {
  return (
    <div className="post-links">
      {props.previous && (
        <Button to={`/${props.previous.slug}/`} type="primary" size="sm">
          Prev Post
        </Button>
      )}
      {props.next && (
        <Button to={`/${props.next.slug}/`} type="primary" size="sm">
          Next Post
        </Button>
      )}
    </div>
  );
};

export default PostLinks;

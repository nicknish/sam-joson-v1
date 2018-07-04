import React from 'react';
import Button from '../components/Button';

const PostLinks = props => {
  return (
    <div className="post-links">
      {props.previous && (
        <Button to={`/blog/${props.previous.slug}/`} className="btn m-r-10">
          Prev Post
        </Button>
      )}
      {props.next && (
        <Button to={`/blog/${props.next.slug}/`} className="btn">
          Next Post
        </Button>
      )}
    </div>
  );
};

export default PostLinks;

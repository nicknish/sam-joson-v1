import React from 'react';

const PostDate = props => {
  return (
    <div className="post-date">
      <p className="post-dateText">
        <span>Published:</span> {props.date}
      </p>
    </div>
  );
};

export default PostDate;

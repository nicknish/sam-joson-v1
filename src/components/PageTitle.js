import React from 'react';

const PageTitle = props => {
  return (
    <h1 small={props.small} className="page-title">
      {props.children}
    </h1>
  );
};

export default PageTitle;

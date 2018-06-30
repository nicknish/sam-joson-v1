import React from 'react';
import Link from 'gatsby-link';

const Button = ({ children, to, size, type, ...props }) => {
  const classNames = `btn ${size ? `btn-${size}` : null} ${
    type ? `btn-${type}` : null
  }`;

  return to ? (
    <Link to={to} className={classNames} {...props}>
      {children}
    </Link>
  ) : (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export default Button;

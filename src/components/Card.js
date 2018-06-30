import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const Card = props => {
  return (
    <article>
      <Link to={`/${props.slug}/`}>
        <Img sizes={props.image.sizes} backgroundColor={'#eeeeee'} />
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: props.excerpt.childMarkdownRemark.excerpt
          }}
        />
      </Link>
    </article>
  );
};

export default Card;

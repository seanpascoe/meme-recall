import React from 'react';

const Tag = (props) => {
  return (
    <span className="chip" memeId={props.memeId}>{props.tagName}<i className="close material-icons">close</i></span>
  )
}

export default Tag;

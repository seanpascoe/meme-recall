import React from 'react';
import $ from "jquery";

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.deleteTag = this.deleteTag.bind(this);
    this.state = {}
  }

  deleteTag(tagId) {
    console.log(tagId);
    $.ajax({
      url: `/tags/${tagId}`,
      type: 'DELETE'
    }).done( () => {
      this.props.deleteTag(tagId)
    });
  }

  render() {
    return (
      <span className="chip" memeId={this.props.memeId}>{this.props.tagName}<i className="close material-icons" onClick={() => this.deleteTag(this.props.id)}>close</i></span>
    )
  }
}

export default Tag;

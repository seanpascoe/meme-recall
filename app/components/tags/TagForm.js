import React from 'react';
import $ from 'jquery';

class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.addTagToDB = this.addTagToDB.bind(this);
  }

  addTagToDB(e) {
    e.preventDefault();
    $.ajax({
      url: '/tags',
      type: 'POST',
      dataType: 'JSON',
      data: {
        tagName: this.refs.tagName.value,
        memeId: this.props.memeId
      }
    }).done( tag => {
      this.props.addTagToDOM(tag);
      this.refs.form.reset();
    })
  }

  render() {
    let style = {
      form: {color: "white", paddingBottom: "10px"}
    }

    return (
      <div style={style.form} className="center">
        <form onSubmit={this.addTagToDB} ref="form">
          <input placeholder="tag..." ref="tagName" />
          <button className="btn" type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default TagForm;

import React from 'react';
import $ from 'jquery';
import TagForm from './TagForm';
import Tag from './Tag';


class Tags extends React.Component {
  constructor(props) {
    super(props)
    this.addTagToDOM = this.addTagToDOM.bind(this);
    this.state = {tags: []};
  }

  componentWillMount() {
    $.ajax({
      url:'/tags',
      type: 'GET',
      dataType: 'JSON',
      data: {memeId: this.props.memeId}
    }).done(tags => {
      console.log(tags);
      this.setState({ tags })
    });
  }

  addTagToDOM(tag) {
    this.setState({tags: [...this.state.tags, tag]})
  }

  render() {
    let tags = this.state.tags.map(tag => {
        return(<Tag key={tag._id} tagName={tag.tagName} memeId={tag.memeId} />);
    });

    return (
      <div>
        <TagForm addTagToDOM={this.addTagToDOM} memeId={this.props.memeId} />
        <div>
          {tags}
          <span className="chip"><i className="close material-icons">close</i></span>
        </div>
      </div>
    )
  }
}

export default Tags;

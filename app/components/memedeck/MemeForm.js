import React from 'react';
import $ from 'jquery';

class MemeForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleMemeUrl = this.handleMemeUrl.bind(this);
    this.addMemeToDB = this.addMemeToDB.bind(this);
    this.state = {memeURL:""};
  }

  handleMemeUrl(e) {
    this.setState({memeURL: e.target.value})
  }

  addMemeToDB(e) {
    e.preventDefault();
    let memeURL = this.state.memeURL;
    $.ajax({
      url: "/memes",
      type: "POST",
      dataType: "JSON",
      data: {memeURL}
    }).done(meme => {
      this.props.addMemeToDOM(meme);
      this.setState({memeURL:""});
    })
  }

  render() {
    return (
      // <div className={this.props.showSongForm}>
      <div>
        <div className="subSongForm container">
          <form ref="songForm" onSubmit={this.addMemeToDB}>
            <input
              type="text"
              onChange={this.handleMemeUrl}
              placeholder="Meme URL..."
              value={this.state.memeURL} />
            <button className="right btn light-blue">Submit</button>
           </form>
        </div>
      </div>
    )
  }
}

export default MemeForm;

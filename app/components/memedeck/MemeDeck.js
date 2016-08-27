import React from 'react';
import MemeSearch from './MemeSearch';
import MemeForm from './MemeForm';
import Meme from './Meme';
import $ from 'jquery';

class MemeDeck extends React.Component {
  constructor(props) {
    super(props)
    this.addMemeToDOM = this.addMemeToDOM.bind(this);
    this.state = {memes: []}
  }

  componentWillMount() {
    $.ajax({
      url: '/memes',
      type: 'GET',
      dataType: 'JSON',
    }).done(memes => {
      this.setState({ memes });
    })
  }

  addMemeToDOM(meme) {
    this.setState({
      memes: [...this.state.memes, meme]
    })
  }

  render() {
    let style = {
      h2 : {fontSize: "1.5em", marginTop: 0, marginLeft: "15px"}
    }

    let memes = this.state.memes.reverse().map((meme) => {
      return (<Meme key={meme._id} {...meme} />)
    })

    return (
      <div>
        <MemeForm addMemeToDOM={this.addMemeToDOM} />
        <MemeSearch />
        <div className="row">
          {memes}
          <Meme memeURL="http://memeblender.com/wp-content/uploads/2012/12/indestructible-nokia-SWAT-team-standard-issue.jpg" tags="indestructible"/>
        </div>
      </div>
    )
  }
}

export default MemeDeck;

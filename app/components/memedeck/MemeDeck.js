import React from 'react';
import MemeSearch from './MemeSearch';
import MemeForm from './MemeForm';
import Meme from './Meme';

class MemeDeck extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    let style = {
      h2 : {
        fontSize: "1.5em",
        marginTop: 0,
        marginLeft: "15px"
      }
    }

    return (
      <div>
        <MemeForm />
        <MemeSearch />
        {/* <h2 style={style.h2}>Categories:</h2> */}
        <div className="row">
          <Meme memeURL="http://memeblender.com/wp-content/uploads/2015/06/insanity-wolf-too-much-make-up.jpg" tags="insanity"/>
          <Meme memeURL="http://memeblender.com/wp-content/uploads/2013/02/bad-luck-brian-letter-on-valentines-day.jpg" tags="bad luck"/>
          <Meme memeURL="http://memeblender.com/wp-content/uploads/2013/04/socially-awkward-penguin-stranger-says-hi.jpg" tags="awkward"/>
          <Meme memeURL="http://memeblender.com/wp-content/uploads/2012/12/indestructible-nokia-SWAT-team-standard-issue.jpg" tags="indestructible"/>
          <Meme memeURL="http://memeblender.com/wp-content/uploads/2015/06/insanity-wolf-too-much-make-up.jpg" tags="insanity"/>
          <Meme memeURL="http://memeblender.com/wp-content/uploads/2013/02/bad-luck-brian-letter-on-valentines-day.jpg" tags="bad luck"/>
          <Meme memeURL="http://memeblender.com/wp-content/uploads/2013/04/socially-awkward-penguin-stranger-says-hi.jpg" tags="awkward"/>
          <Meme memeURL="http://memeblender.com/wp-content/uploads/2012/12/indestructible-nokia-SWAT-team-standard-issue.jpg" tags="indestructible"/>
        </div>
      </div>
    )
  }
}

export default MemeDeck;

import React from 'react'

class MemeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      // <div className={this.props.showSongForm}>
      <div>
       <div className="subSongForm container">
         <form ref="songForm">
           <input ref="meme-url" placeholder="Meme URL..." type="text" />
           <input ref="tags" placeholder="Tag..." type="text" />
           <button className="right btn">Submit</button>
         </form>
       </div>
     </div>
    )
  }
}

export default MemeForm;

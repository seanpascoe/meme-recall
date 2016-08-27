import React from 'react';
import $ from 'jquery';
import Tags from '../tags/Tags.js';
import CopyToClipboard from 'react-copy-to-clipboard';

class Meme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {copied: false}
  }


  render() {
    let style = {
      card: {borderRadius: "5px", height: "530px"},
      cardImage: {borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderTopLeftRadius: "5px", borderTopRightRadius: "5px"},
      cardcontent: {padding: "20px 20px 0 20px"},
      anchors: {marginLeft: "20px", marginRight: "20px", cursor:"pointer"},
      icons: {fontSize: "32px"},
      cardaction: {padding: "10px 5px 0 5px"}
    };



    return (
      <div className="col s12 m4 l3">
        <div style={style.card} className="card light-blue">
          <div className="card-image">

            <img style={style.cardImage} src={this.props.memeURL}/>

            <div style={style.cardaction} className="card-action center">


              <CopyToClipboard text={this.props.memeURL}
                onCopy={() => this.setState({copied: true})}>
                <a style={style.anchors} className="white-text"><i style={style.icons} className="close material-icons">content_copy</i></a>
              </CopyToClipboard>
              <a style={style.anchors} className="white-text" href="#"><i style={style.icons} className="close material-icons">delete_forever</i></a>


              <Tags memeId={this.props._id} />

            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Meme;

import React from 'react';

const Meme = (props) => {
  let style = {
    card: {borderRadius: "5px"},
    cardImage: {borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderTopLeftRadius: "5px", borderTopRightRadius: "5px"},
    cardcontent: {padding: "20px 20px 0 20px"},
    anchors: {marginLeft: "20px", marginRight: "20px"},
    icons: {fontSize: "32px"}
  };

  return (
    <div className="col s12 m4 l3">
      <div style={style.card} className="card light-blue">
        <div className="card-image">

          <img style={style.cardImage} src={props.memeURL}/>

          <div style={style.cardaction} className="card-action center">
            <a style={style.anchors} className="white-text" href="#"><i style={style.icons} className="close material-icons">content_copy</i></a>
            <a style={style.anchors} className="white-text" href="#"><i style={style.icons} className="close material-icons">delete_forever</i></a>
            <div>
              <span className="chip">{props.tags}<i className="close material-icons">close</i></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Meme;

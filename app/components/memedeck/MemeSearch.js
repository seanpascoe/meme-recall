import React from 'react';

class MemeSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="input-field">
            <input type="text" placeholder="Search tags..."/>
          </div>
        </form>
      </div>
    )
  }
}

export default MemeSearch;

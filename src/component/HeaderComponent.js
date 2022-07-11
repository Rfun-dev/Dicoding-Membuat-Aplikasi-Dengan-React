import React from "react";
import '../css/header.css'

class HeaderComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            searchInput : ''
        }

        this.onSearchChange = this.onSearchChange.bind(this)
    }



  onSearchChange(event) {
      this.setState({
        searchInput :  event.target.value
    })
    this.props.onSearch(event.target.value);
  }

  render() {
    return (
      <div className="header">
        <img className="header__img" src="./img/post-it.png" alt="Notes" />
        <h1 className="header__h1">Notes App</h1>
        <input
          className="header__input"
          placeholder="Cari Catatan..."
          onChange={this.onSearchChange}
          value={this.state.searchInput}
        ></input>
      </div>
    );
  }
}

export default HeaderComponent;

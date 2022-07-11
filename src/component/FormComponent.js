import React from "react";
import '../css/form.css';
import { showFormattedDate } from "./utils";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      createdAt : showFormattedDate(new Date()),
      limit: 50,
      archived : false,
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onTrigger = this.onTrigger.bind(this);
  }

  onTitleChange(event) {
    const limit = 50
    this.setState({
      title: event.target.value.slice(0,limit),
      limit: 50 - event.target.value.slice(0,limit).length,
    });
  }

  onBodyChange(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onTrigger(event){
    event.preventDefault()
    this.setState({
      createdAt : showFormattedDate(new Date()),
    })
    this.props.dataReceive(this.state);
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.onTrigger}>
          <p className="form__p">Sisa Karakter : <span>{this.state.limit}</span></p>
          <input
            className="form__input"
            placeholder="Title"
            onChange={this.onTitleChange}
            value={this.state.title}
            maxLength="50"
          />
          <br />
          <textarea
            className="form__textarea"
            placeholder="Write your notes..."
            onChange={this.onBodyChange}
            value={this.state.body}
            draggable="false"
          /><br/>

          <button className="form__button" type="submit">Simpan</button>
        </form>
      </div>
    );
  }
}

export default FormComponent;

import HeaderComponent from "./HeaderComponent";
import FormComponent from "./FormComponent";
import NoteList from "./listnote/NoteList";
import ArchiveList from "./listArchive/ArchiveList";
import React from "react";
import { getInitialData} from "./utils/index";
import "../css/style.css"

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getInitialData(),
      query : '',
    };

    this.onDataReceived = this.onDataReceived.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDataReceived({ title, body, createdAt, archived }) {
    this.setState((previousState) => {
      return {
        data : [
          ...previousState.data,
          {
            id: +new Date(),
            title,
            body,
            createdAt,
            archived,
          },
        ],
      }
    });
    console.log(this.state.data);;
  }

  onSearchHandler(value){
    console.log(value);
    this.setState({
      query : value
    })
  }
  
  onDeleteHandler(id){
    const filter = this.state.data.filter(item => (
      item.id !== id
    ))
    console.log(filter)
    this.setState({
      data : filter
    })
  }

  onArchiveHandler(id){
    const archived = this.state.data.map(item => {
      if(item.id === id){
        item.archived = true
      }
      console.log(item);
      return item;
    })

    this.setState({
      data : archived
    })
  }

  
  render() {
    const datas = this.state.data
    return (
      <div className="note">
        <HeaderComponent onSearch={this.onSearchHandler} className="note__header"/>
        <FormComponent dataReceive={this.onDataReceived} className="note__form"/>
        <NoteList query={this.state.query} data={datas} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} className="note__note-list"/>
        <ArchiveList query={this.state.query} data={datas} onDelete={this.onDeleteHandler} className="note__archive-list"/>
      </div>
    );
  }
}

export default NoteApp;

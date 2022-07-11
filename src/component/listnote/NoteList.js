import React from "react";
import NoData from "../NoData";
import NoteItem from "./NoteItem";
import "../../css/notelist.css";

class NoteList extends React.Component {
  render() {
    const datas = this.props.data;
    const filter = datas.filter((item) => !item.archived);
    const query = this.props.query;
    return (
      <div className="list">
        <h1 className="list__h1">List Note</h1>
        <div
          className="list__container">
          {filter.length > 1 ? (
            datas
              .filter((data) =>
                data.title.toLowerCase().includes(query.toLowerCase())
              )
              .map((data) =>
                data.archived ? null : (
                  <NoteItem
                    key={data.id}
                    {...data}
                    onDelete={this.props.onDelete}
                    onArchive={this.props.onArchive}
                  />
                )
              )
          ) : (
            <NoData />
          )}
        </div>
      </div>
    );
  }
}

export default NoteList;

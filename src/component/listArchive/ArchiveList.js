import React from "react";
import NoData from "../NoData";
import ArchiveItem from "./ArchiveItem";

class ArchiveList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  render() {
    const datas = this.props.data;
    const filter = datas.filter((item) => item.archived);
    const query = this.props.query;
    return (
      <div className="list">
        <h1 className="list__h1">Archived Note</h1>
        <div className="list__container">
          {filter.length !== 0 ? (
            datas
              .filter((item) =>
                item.title.toLowerCase().includes(query.toLowerCase())
              )
              .map((item) =>
                item.archived ? (
                  <ArchiveItem
                    key={item.id}
                    {...item}
                    onDelete={this.props.onDelete}
                  />
                ) : null
              )
          ) : (
            <NoData />
          )}
        </div>
      </div>
    );
  }
}

export default ArchiveList;

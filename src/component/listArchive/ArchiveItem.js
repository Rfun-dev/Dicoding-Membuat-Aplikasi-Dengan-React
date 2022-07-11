import React from "react";
import { showFormattedDate } from "../utils";
import DeleteButton from "../button/DeleteButton";

const ArchiveItem = ({title,body,createdAt,id,onDelete}) => {

    return(
        <div className="item">
            <h2 className="item__h2">{title}</h2>
            <i className="item__p">{showFormattedDate(createdAt)}</i>
            <p className="item__p">{body}</p>
            <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    )
}

export default ArchiveItem
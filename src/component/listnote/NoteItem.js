import React from "react";
import { showFormattedDate } from "../utils";
import ArchiveButton from "../button/ArchiveButton";
import DeleteButton from "../button/DeleteButton";

const NoteItem = ({title,body,createdAt,id,onDelete,onArchive}) => {
    return(
        <div className="item">
            <h2 className="item__h2">{title}</h2>
            <i className="item__p">{showFormattedDate(createdAt)}</i>
            <p className="item__p">{body}</p>
            <DeleteButton onDelete={onDelete} id={id}/>
            <ArchiveButton onArchive={onArchive} id={id}/>
        </div>
    )
}

export default NoteItem;
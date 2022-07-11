import React from "react";

const ArchiveButton = ({onArchive,id}) => {
    return(
        <button className="item__button-archive" onClick={() => onArchive(id)}>Arsipkan</button>
    )
}

export default ArchiveButton;
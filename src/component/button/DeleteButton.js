import React from "react";

const DeleteButton = ({onDelete,id}) => {
    return(
        <button className="item__button-delete" onClick={() => onDelete(id)}>Hapus</button>
    )
}

export default DeleteButton
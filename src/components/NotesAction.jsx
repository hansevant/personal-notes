import React from "react";

const NotesAction = ({id, archived, deleteEH, archiveEH, unarchiveEH}) => { 
    return(
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => deleteEH(id)}>Delete</button>
            {
                archived === false ? (
                    <button className="note-item__archive-button" onClick={() => archiveEH(id)}>Arsipkan</button>
                ) : (
                    <button className="note-item__archive-button" onClick={() => unarchiveEH(id)}>Pindahkan</button>
                )
            }
        </div>
    );
}

export default NotesAction;
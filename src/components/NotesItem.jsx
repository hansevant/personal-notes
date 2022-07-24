import React from "react";
import NotesContent from "./NotesContent";
import NotesAction from "./NotesAction";

const NotesItem = ({id, title, createdAt, body, archived, deleteEH, archiveEH, unarchiveEH}) => { 
    return(
        <div className="note-item">
            <NotesContent title={title} createdAt={createdAt} body={body} />
            <NotesAction deleteEH={deleteEH} archiveEH={archiveEH} unarchiveEH={unarchiveEH} id={id} archived={archived} />
        </div>
    );
}

export default NotesItem;
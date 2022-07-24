import React from "react";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";

const NotesBody = ({notes, addNote, deleteEH, archiveEH, unarchiveEH, keyword}) => {
    return(
        <div className="note-app__body">
            <NotesInput addNote={addNote} />
            <NotesList 
                notes={notes} 
                deleteEH={deleteEH} 
                unarchiveEH={unarchiveEH} 
                archiveEH={archiveEH} 
                keyword={keyword}
            />
        </div>
    );
}

export default NotesBody;
import React from "react";

const NotesHeader = ({searchEH, keyword}) => {
    return(
        <div className="note-app__header">
            <h1>My Notes</h1>
            <input 
                type='text' 
                placeholder="Cari catatan..."
                onChange={searchEH}
                value={keyword}
            />
        </div>
    );
}

export default NotesHeader;
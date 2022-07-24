import React from "react";
import NotesItem from "./NotesItem";

const NotesList = ({notes, deleteEH, archiveEH, unarchiveEH, keyword}) =>{
    const showActive = notes
        .filter((note) => note.archived === false)
        .filter((note)=>{
            return note.title.toLowerCase().includes(keyword.toLowerCase());
        });
    const showArchived = notes
        .filter((note) => note.archived === true)
        .filter((note)=>{
            return note.title.toLowerCase().includes(keyword.toLowerCase());
        });

    return(
        <>
            <h2>Catatan Aktif</h2>
            <div className="notes-list">
                {
                    showActive.length > 0 ? (
                        showActive.map((note) => (
                            <NotesItem deleteEH={deleteEH} unarchiveEH={unarchiveEH} archiveEH={archiveEH} key={note.id} {...note} />
                        ))
                    ) : (
                        <p className="notes-list__empty-message">Kosong</p>
                    )
                }
            </div>
            <h2>Arsip</h2>
            <div className="notes-list">
                {
                    showArchived.length > 0 ? (
                        showArchived.map((note) => (
                            <NotesItem deleteEH={deleteEH} unarchiveEH={unarchiveEH} archiveEH={archiveEH} key={note.id} {...note} />
                        ))
                    ) : (
                        <p className="notes-list__empty-message">Kosong</p>
                    )
                }
            </div>
        </>
    );
}

export default NotesList;
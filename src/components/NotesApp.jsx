import React from "react";
import NotesHeader from "./NotesHeader";
import NotesBody from "./NotesBody";
import { getInitialData } from "../utils/index";

class NotesApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
            search: ''
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
      }

    onArchiveHandler(id) {
        const notes = this.state.notes;
        const archive = notes.findIndex(note => note.id === id);
        notes[archive].archived = true ;
        this.setState({ notes });
      }

    onUnarchiveHandler(id) {
        const notes = this.state.notes;
        const archive = notes.findIndex(note => note.id === id);
        notes[archive].archived = false ;
        this.setState({ notes });
      }
      
    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
          return {
                notes: [
                ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: +new Date(),
                    }
                ]
            }
        });
    }

    onSearchHandler(e) {
        this.setState((prevState) => {
            return {
                ...prevState,
                search: e.target.value
            };
        });
    }

    render(){
        return(
            <>
                <NotesHeader keyword={this.state.search} searchEH={this.onSearchHandler} />
                <NotesBody 
                    deleteEH={this.onDeleteHandler}
                    unarchiveEH={this.onUnarchiveHandler} 
                    archiveEH={this.onArchiveHandler}
                    addNote={this.onAddNoteHandler} 
                    notes={this.state.notes}
                    keyword={this.state.search}
                />
            </>
        );
    }
}

export default NotesApp;
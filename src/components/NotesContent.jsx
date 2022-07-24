import React from "react";
import { showFormattedDate } from "../utils/index";

const NotesContent = ({title, createdAt, body}) => { 
        return(
                <div className="note-item__content">
                    <p className="note-item__title">{title}</p>
                    <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                    <p className="note-item__body">{body}</p>
                </div>
        );
}

export default NotesContent;
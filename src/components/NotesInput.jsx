import React from "react";

class NotesInput extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',
            maxChar: 50
        }


        this.onTitleCEH = this.onTitleCEH.bind(this);
        this.onBodyCEH = this.onBodyCEH.bind(this);
        this.onSubmitEH = this.onSubmitEH.bind(this);
    }

    onTitleCEH(e){
        this.setState(()=> {
            return {
                title : e.target.value.slice(0, this.state.maxChar)
            };
        });
    }

    onBodyCEH(e){
        this.setState(()=> {
            return {
                body : e.target.value
            };
        });
    }

    onSubmitEH(e) {
        e.preventDefault();
        this.props.addNote(this.state);
      }

    render(){

        return(
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitEH}>
                    <p className="note-input__title__char-limit">
                        Sisa Karakter :&nbsp; 
                        <span id="limit">
                            {this.state.maxChar - this.state.title.length}
                        </span>
                    </p>
                    <input 
                        type='text' 
                        placeholder="Ini adalah Judul catatanmu..." 
                        value={this.state.title} 
                        onChange={this.onTitleCEH}
                        onKeyUp={this.onMaxCharCEH}
                        id='title'
                        required 
                    />
                    <textarea 
                        className="note-input__body" 
                        placeholder="Tuliskan catatanmu disini..." 
                        value={this.state.body} 
                        onChange={this.onBodyCEH}
                        id='body' 
                        required 
                    />
                    <button onClick={this.test}>Buat</button>
                </form>
            </div>
        );
    }
}

export default NotesInput;
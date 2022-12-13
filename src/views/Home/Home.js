import React, { useState, useEffect } from "react";
import "./Home.css";

import Navbar from "./../../components/Navbar/Navbar";
import Note from "./../../components/Note/Note";

function Home() {
  const [notes, setNotes] = useState([
    {
      title: "Note",
      content: "You Can Add More Note To This List.",
    },
  ]);

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")


  function addNote(){
    const newNote = {
      "title":title,
      "content":content
    }
    setNotes([...notes, newNote])

    alert('Note added successfully')

    setTitle("")
    setContent("")
  }
  return (
    <div>
      <div className="app-title-container">
        <h1 className="app-title">All Notes</h1>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="notes-container">
            {notes.map((note, index) => {
              return <Note title={note.title} content={note.content} />;
            })}
          </div>
        </div>
        <div className="col-md-6">
          <div className="note-editor-container">
            <h3 className="text-center">Add Notes</h3>
            <form>
              <div>
                <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} className="form-control mt-4" placeholder="Note title" />
              </div>
              <div>
                <input type="text" onChange={(e)=>{setContent(e.target.value)}} value={content} className="form-control mt-4" placeholder="Note Description" />
              </div>
              <div className="text-center">
                <button type="button" onClick={addNote} className="btn btn-primary mt-4">Add Note</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

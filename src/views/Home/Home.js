import React, { useState, useEffect } from "react";
import "./Home.css";

import Navbar from "./../../components/Navbar/Navbar";
import Note from "./../../components/Note/Note";

function Home() {
  const [notes, setNotes] = useState([
    {
      title: "Note 1",
      content: "This is conntent of note 1",
    },
    {
      title: "Note 2",
      content: "This is conntent of note 1",
    },
    {
      title: "Note 3",
      content: "This is conntent of note 1",
    },
    {
      title: "Note 4",
      content: "This is conntent of note 1",
    },
    {
      title: "Note 5",
      content: "This is conntent of note 1",
    }
  ]);

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

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
                <input type="text" className="form-control mt-4" placeholder="Note title" />
              </div>
              <div>
                <input type="text" className="form-control mt-4" placeholder="Note Description" />
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-primary mt-4">Add Note</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

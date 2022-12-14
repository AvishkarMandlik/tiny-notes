import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import "./Home.css";

import Navbar from "./../../components/Navbar/Navbar";
import Note from "./../../components/Note/Note";

function Home() {
  const [notes, setNotes] = useState([
    {
      title: "Note",
      content: "You Can Add More Note To This List."
    }
  ])

  useEffect(()=>{
    const notes = localStorage.getItem("notes")
    if(notes){
      setNotes(JSON.parse(notes))
    }
  }, [])

  useEffect(()=>{
    if(notes.length > 1){
      localStorage.setItem("notes", JSON.stringify(notes))
    }
  }, [notes])

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")


  function addNote(){
    const newNote = {
      "title":title,
      "content":content
    }

    if(title==="" || content==="")
    {
      swal({
        title: "Error",
        text: "Please fill all the fields!",
        icon: "error",
      });
      return;
    }
    setNotes([...notes, newNote])

    swal({
      title: "Note Added!",
      text: "You note has been added to the list!",
      icon: "success",
    });

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
          <div className="notes-container mt-2">
            {notes.map((note, index) => {
              return <Note title={note.title} content={note.content} noteIndex={index} />
            })}
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <div className="note-editor-container">
            <h4 className="text-center">Add Your Notes here...</h4>
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

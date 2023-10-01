import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title : "",
    content : ""
  });
  
  function handleNoteChange(e){
    const {name, value} = e.target;  //destructuring object
    
    setNote(prevNote => {
      return {...prevNote, [name]: value};
    });
  }

  function submitNote(event) {
    props.onAdd(note)
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form >
        <input onChange={handleNoteChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleNoteChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded,setExpanded]=useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue, //this is the spread operator ES6
        [name]: value, //set the new name and value either title or content
      };
    });
  }

  function handleSubmit(event) {
    props.onAdd(note); //this will embed the note as value of prop onAdd and
    //consequently trigger the addNote fucntion in app.js thereby passing the note to app.jsx
    event.preventDefault(); //this will prevent the default behaviour from happening
    //which is to reload the website when submit

    setNote({
      title: "",
      content: "",
    });
  }
  function expand(){
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        /> : null}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded?3:1}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

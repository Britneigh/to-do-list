import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Task = ({setList}) => {
    const plusIcon = <FontAwesomeIcon icon={faPlus} />;
    const [task, setTask] = useState("");

const handleInput = (e) => {
    setTask(e.target.value);
}    
const handleClick = (e) => {
  e.preventDefault();
    if (task.trim() !== '') {
            setList((prev) => {
            return [...prev, task]
        })
    setTask("");
  }
}

    return (
    <div className="input">
      <input className="input-field" type="text" onChange={handleInput} value={task}></input>
      <button className="add-btn" onClick={handleClick}>{plusIcon}</button>
    </div>
  )
}

export default Task;

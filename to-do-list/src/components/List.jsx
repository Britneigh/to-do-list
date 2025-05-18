import Task from "./Task"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const List = () => {
    const [list, setList] = useState([]);
    const trashIcon = <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>

const handleRemove = (selectedIndex) => {
   const newList = list.filter((item, index) => index !== selectedIndex);
   setList(newList);
}

  return (
    <section>
    <Task setList={setList}/>
    <ul>
        {list.map((item, index) => {
            return <li key={index} className="li-task">
                {item}
                <button className="delete-btn" onClick={() => handleRemove(index)}>{trashIcon}</button>
            </li>
        })}
    </ul>
    </section>
  )
}

export default List;

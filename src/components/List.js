import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { fetchDelete, fetchPatch } from "../util/api";


const CheckBox = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border: 1px solid #94929d;
  border-radius: 100%;
  cursor: pointer;
  background: ${(props) => (props.color ? props.color : "white")};
`;

const List = ({list, reRendering}) => {
  const [isEdit, isEditSet] = useState(false);
  const [isChange, isChangeSet] = useState(list.content);

  const handleCheck = (listId) => {
    if(list.checked === true){
      fetchPatch(`http://localhost:3001/lists/${listId}`, {checked: false});
    } else{
      fetchPatch(`http://localhost:3001/lists/${listId}`, {checked: true});
    }
    reRendering();
  };
  
  const handleUpdate = (listId) => {
    const updatedData = {content: isChange};
    fetchPatch(`http://localhost:3001/lists/${listId}`, updatedData);
    reRendering();
    isEditSet(false);
  };

  const handleEnterEdit = (event, listId) => {
    if(event.key === 'Enter'){
      handleUpdate(listId);
    }
  }

  const handleEditList = (event) => {
    isChangeSet(event.target.value);
  };

  const handleDelete = (listId) => {
    fetchDelete(`http://localhost:3001/lists/${listId}`);
    reRendering();
  };

  return (
    <li className={list.checked ? "list checked" : "list"}>
      <div className="checkbox" onClick={() => {handleCheck(list.id)}} >
        <CheckBox color={list.checked ? "#C4B3FF" : "#fff"}/>
      </div>
      <div className="list_content">
        {isEdit ? (
          <input type="text" value={isChange} onChange={handleEditList} onKeyPress={(event) => {handleEnterEdit(event, list.id)}} autoFocus></input>
        ) : (
          list.content
        )}
      </div>
      <div className="list_buttons">
        {!isEdit ? 
        <button onClick={() => isEditSet(true)}>
          <FontAwesomeIcon icon={faPen} />
        </button>
        :
        <button onClick={() => handleUpdate(list.id)}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        }
        <button onClick={() => handleDelete(list.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default List;

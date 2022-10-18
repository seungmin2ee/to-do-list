import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';


const CheckBox = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border: 1px solid #94929d;
  border-radius: 100%;
  cursor: pointer;
  background: ${(props) => (props.color ? props.color : "white")};
`;

const List = ({ list, isData, isDataSet }) => {
  const [isChecked, isCheckedSet] = useState(false);
  const [isEdit, isEditSet] = useState(false);
  const [isChange, isChangeSet] = useState(list.content);

  const handleCheck = () => {
    isCheckedSet(!isChecked);
  };

  const handleEdit = (listId) => {
    isEditSet(!isEdit);
    if(isEdit){
      isDataSet(
        isData.map((data) => {
          if (data.id === listId) data.content = isChange;
          return data;
        })
      );
    }
  };

  const handleEditList = (event) => {
    isChangeSet(event.target.value);
  };

  const handleDelete = (listId) => {
    isDataSet(isData.filter((el) => el.id !== listId));
  };

  return (
    <li className={isChecked ? "list checked" : "list"}>
      <div className="checkbox" onClick={handleCheck} >
        <CheckBox color={isChecked ? "#C4B3FF" : "#fff"}/>
      </div>
      <div className="list_content">
        {isEdit ? (
          <input type="text" value={isChange} onChange={handleEditList} autoFocus></input>
        ) : (
          list.content
        )}
      </div>
      <div className="list_buttons">
        <button onClick={() => handleEdit(list.id)}>
          <FontAwesomeIcon icon={ isEdit ? faCheck : faPen } />
        </button>
        <button onClick={() => handleDelete(list.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default List;

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { fetchCreate } from "../util/api";

const AddList = () => {
  const [isInput, isInputSet] = useState("");

  const handleChangeInput = (event) => {
    isInputSet(event.target.value);
  };

  const handleClickAdd = () => {
    const list = {
      content: isInput,
      checked: false
    };

    isInput !== "" ? 
    fetchCreate('http://localhost:3001/lists/', list) : alert("내용을 입력하세요.");
    isInputSet("");
  };

  return (
    <div className="addList_input">
      <input
        value={isInput}
        onChange={handleChangeInput}
        placeholder="add your list..."
      ></input>
      <button onClick={handleClickAdd}>
        <FontAwesomeIcon icon={faPlus} size="2x" inverse />
      </button>
    </div>
  );
};

export default AddList;

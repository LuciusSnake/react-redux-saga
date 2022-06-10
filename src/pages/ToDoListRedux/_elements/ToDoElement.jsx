import React, { useRef, useState, useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import style from '../style.module.scss'


function ToDoElementRedux({ id, setList, text, list }) {
  const [isEdit, setEdit] = useState(false);
  const [editText, setEditText] = useState(text);

  const input = useRef(null);

  const handleRemove = (id) => () => {
    setList((prevState) => prevState.filter((element) => element.id !== id));
  };

  const handleEdit = () => setEdit(true);

  const handleSave = () => {
    const index = list.findIndex((item) => item.id === id);
    const newList = [...list];
    newList[index].text = editText;

    setList(newList);
    setEdit(false);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setEditText(value);
  };

  useEffect(() => {
    if (isEdit) {
      input.current.focus();
    }
  }, [isEdit]);

  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        {isEdit ? (
          <input ref={input} value={editText} onChange={handleChange} />
        ) : (
          text
        )}
      </div>
      <Button
        className={style.btn}
        variant={isEdit ? "success" : "warning"}
        onClick={isEdit ? handleSave : handleEdit}
      >
        {isEdit ? "Save" : "Edit"}
      </Button>
      <Button className={style.btn} variant="danger" onClick={handleRemove(id)}>
        Remove
      </Button>
    </ListGroup.Item>
  );
}

export default React.memo(ToDoElementRedux);

import { useEffect, useState } from "react";
import AddBox from "./addBox";
import CheckedList from "./checkedList";
import NormalList from "./normalList";

const SearchBox: React.FC = () => {
  const [task, setTask]: any[] = useState({ name: "" });
  const [error, seterror]: any = useState("");
  const [array, setArray]: any[] = useState([]);
  const [editedName, setEditedName]: any[] = useState("");
  const [newName, setnewName]: any[] = useState("");

  const add = (e: any) => {
    const obj = {
      name: e.target.value,
      id: e.target.value,
      checked: false,
      editname:false
    };

    setTask(obj);
  };

  useEffect(() => {
    if (task === "") return;

    if (task.name.length === 1 || task.name.length === 2) {
      seterror("write somthing longer");
    } else {
      seterror("");
    }
  }, [task]);

  const submit = (e: any) => {
    e.preventDefault();
    const newArray = [...array];
    const index = newArray.findIndex((t: any) => t.name === task.name);

    if (index !== -1) {
      alert("This text is already in your list");
    } else {
      newArray.push(task);
      setArray(newArray);
    }
    setTask({ name: "" });
  };

  const deleteTask = (name: any, event: any) => {
    event.stopPropagation();
    const arrayFiltered = array.filter((t: any) => t.name !== name);
    setArray(arrayFiltered);
  };

  const check = (name: any) => {
    const newArray = [...array];
    const index = newArray.findIndex((t: any) => t.name === name);

    if (newArray[index].checked) {
      newArray[index].checked = false;
    } else {
      newArray[index].checked = true;
    }
    setArray(newArray);
  };

  const edit = (e: any , name:any) => {

    e.stopPropagation()

    const newArray = [...array];
    const index = newArray.findIndex((t: any) => t.name === name);

    if (newArray[index].editname) {
      newArray[index].editname = false;
    } else {
      newArray[index].editname = true;
    }


    setArray(newArray);




    
    // if (editedName) {
    //   setEditedName("");
    // } else {
    //   setEditedName(" ");
    // }
  };

  const changeNewName = (event: any) => {
    const newNameTask = event.target.value;
    setnewName(newNameTask);
  };

  const newTask = (event: any, name: any) => {
    event.preventDefault();
    event.stopPropagation();
    const newArray = [...array];
    const index = newArray.findIndex((t: any) => t.name === name);
    const newIndex = newArray.findIndex((t: any) => t.name === newName);
    if (newIndex !== -1) {
      alert("This text is already in your list");
      return;
    } else if (newName === "") {
      alert("Please write somthing");
      return;
    } else if (newName.length < 3) {
      alert("Please write somthing longer");
      return;
    } else {
      newArray[index].name = newName;
      newArray[index].editname = false;
      setnewName("");
      setEditedName("");

    }


  };

  const list = array.map((t: any) => {
    if (t.checked) {
      return (
        <CheckedList name={t.name} deleteTask={deleteTask} check={check} />
      );
    } else {
      return (
        <NormalList
          name={t.name}
          changeNewName={changeNewName}
          check={check}
          deleteTask={deleteTask}
          newTask={newTask}
          newName={newName}
          edit={edit}
          checkEdit = {t.editname}
        />
      );
    }
  });

  return (
    <>
      <AddBox
        submit={submit}
        add={add}
        name={task.name}
        error={error}
        list={list}
      />
    </>
  );
};

export default SearchBox;

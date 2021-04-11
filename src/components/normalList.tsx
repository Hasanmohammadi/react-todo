import styled from "styled-components";

export interface normalListProps {
  name: string;
  check: Function;
  deleteTask: Function;
  changeNewName: any;
  newTask: Function;
  newName: string;
  edit: Function;
  checkEdit :boolean

}

const Span = styled.span`
float: right;
color: #35ff00;
margin-left: 1em;
`;

const Li = styled.li`
  list-style: none;
  width: 96%;
  height: 2em;
  border: 1px solid #004080;
  margin: 10px 0px;
  padding: 9px 23px 0px 13px;
  background: #004080;
  color: #80bfff;
  vertical-align: middle;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const NormalList: React.FC<normalListProps> = ({
  name,
  check,
  deleteTask,
  changeNewName,
  newTask,
  newName,
  edit,
  checkEdit ,

}) => {
  const stop = (e: any) => {
    e.stopPropagation();
  };

  return (
    <Li key={name} onClick={() => check(name)}>
      {name}
      {checkEdit && (
        <form>
          <input onChange={changeNewName} onClick={stop} value={newName} />
          <button type="submit" onClick={(event) => newTask(event, name)}>
            !
          </button>
        </form>
      )}
      <div>
        <Span onClick={(event) => deleteTask(name, event)}>❌</Span>
        <Span onClick={(event) => edit(event , name)}>♻</Span>
      </div>
    </Li>
  );
};

export default NormalList;

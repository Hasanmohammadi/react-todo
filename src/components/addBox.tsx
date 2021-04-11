import styled from "styled-components";

const Btn = styled.button`
  width: 9%;
  height: 3em;
  cursor: pointer;
  background: #80bfff;
  color: #004080;
  border: 1px solid #004080;
`;

const IInput = styled.input`
  width: 90%;
  height: 2.5em;
`;

const Ul = styled.ul`
  padding: 0;
  margin: 0;
`;

export interface AddBoxProps {
  submit: any;
  add: any;
  name: string;
  error: any;
  list: object[];
}

const AddBox: React.FC<AddBoxProps> = ({ submit, add, name, error, list }) => {
  return (
    <form>
      <h1>Todo List</h1>
      <IInput placeholder="Write Your Task" onChange={add} value={name} />
      <Btn type="submit" onClick={submit} disabled={error || !name}>
        Add Task
      </Btn>
      {error && <span>{error}</span>}
      <Ul>{list}</Ul>
    </form>
  );
};

export default AddBox;

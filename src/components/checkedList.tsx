import styled from "styled-components";

export interface CheckedListProps {
  name: string;
  deleteTask: Function;
  check: Function;
}

const CheckedList: React.FC<CheckedListProps> = ({
  name,
  deleteTask,
  check,
}) => {
  const Lli = styled.li`
    list-style: none;
    width: 96%;
    height: 2em;
    border: 1px solid #80bfff;
    margin: 10px 0px;
    padding: 9px 23px 0px 13px;
    background: #80bfff;
    color: #004080;
    vertical-align: middle;
    cursor: pointer;
    text-decoration: line-through;
  `;

  const Span = styled.span`
float: right;
color: #35ff00;
margin-left: 1em;
`;
  return (
    <Lli key={name} onClick={() => check(name)}>
      {name}
      <Span onClick={(event) => deleteTask(name, event)}>❌</Span>
    </Lli>
  );
};

export default CheckedList;

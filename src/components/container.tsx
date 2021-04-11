import styled from "styled-components";
import SearchBox from "./serchBox";


const Container: React.FC = () => {
  const Div = styled.div`
    width: 60em;
    margin: auto;
    margin-top: 6em;
    // height:50em;
  `;
  return (
    <Div>
      <SearchBox />
    </Div>
  );
};

export default Container;

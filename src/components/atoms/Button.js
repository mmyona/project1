import styled from "styled-components";
import theme from "../theme";

export const Btn = (props) => {
  return (
    <>
      <StyledBasicBtn
        background={props.background}
        color={props.color}
        fontsize={props.fontsize}
        width={props.width}
        height={props.height}
        margin={props.margin}
        type={props.type}
        onClick={props.onClick}
        value={props.value}
        fontWeight={props.fontWeight}
        fontFamily={props.fontFamily}
        cursor={props.cursor}
      >
        {props.btnText}
      </StyledBasicBtn>
    </>
  );
};

const StyledBasicBtn = styled.button`
  box-sizing: border-box;
  width: ${(props) => props.width || "4.8rem"};
  height: ${(props) => props.height || "3.6rem"};
  border-radius: 1.2rem;
  border: none;
  background-color: ${(props) => props.background || theme.color.navy};
  cursor: ${(props) => props.cursor || "pointer"};
  margin: ${(props) => props.margin || "0.3rem"};
  /* box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 0.6); */

  text-align: center;
  font-family: ${(props) => props.fontFamily || "Inter"};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontsize || "1rem"};
  line-height: 1.9rem;
  color: ${(props) => props.color || "white"};
  &:hover {
    color: ${theme.color.gra_blue};
  }
  &&&.active {
    color: ${theme.color.gra_blue};
  }
`;

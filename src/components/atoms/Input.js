import styled from "styled-components";
import React from "react";
import theme from "../theme";

export const InputAuth = (props) => {
  return (
    <Wrapper>
      <span>{props.label}</span>
      <AuthInput
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        error={props.error}
        id={props.id}
        width={props.width}
      />
      <p>{props.errmsg}</p>
    </Wrapper>
  );
};

export const SearchInput = (props) => {
  return (
    <StyledInput
      placeholder="검색어를 입력해주세요"
      value={props.value}
      onChange={props.onChange}
      onKeyUp={props.onKeyUp}
      border={props.border}
    />
  );
};

const StyledInput = styled.input`
  background: transparent;
  width: 30rem;
  height: 2.5rem;
  margin-right: 1rem;
  border: ${(props) => `0.1rem solid ${props.border || theme.color.gray}`};
  border-radius: 0.8rem;
  font-size: 1rem;
  padding-left: 1rem;
`;

const AuthInput = styled.input`
  background: transparent;
  width: ${(props) => props.width || "34rem"};
  height: 2.5rem;
  border-radius: 0.8rem;
  font-size: 1rem;
  padding-left: 1rem;
  border: ${(props) =>
    `0.1rem solid ${props.error ? theme.color.red : theme.color.gray}`};
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px ${theme.color.navy} inset;
    box-shadow: 0 0 0 1000px ${theme.color.navy} inset;
    -webkit-text-fill-color: white;
  }
`;

const Wrapper = styled.div`
  line-height: 2.5rem;
  display: flex;
  flex-direction: column;
  width: 36.4rem;
  span {
    font-size: ${(props) => props.fontSize || "1rem"};
  }
`;

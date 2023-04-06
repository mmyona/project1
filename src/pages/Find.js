import styled from "styled-components";
import { Btn } from "../components/atoms/Button";
import { InputAuth } from "../components/atoms/Input";
import { useState } from "react";

export const Find = () => {
  const [userInput, setUserInput] = useState({
    email1: "",
    id: "",
    email2: "",
  });

  const [inputErr, setInputErr] = useState({
    email1: false,
    id: false,
    email2: false,
  });
  const emailValidCheck = (mail) => {
    const emailRegexp = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!mail || !emailRegexp.test(mail)) {
      setInputErr((prevState, mail) => {
        return { ...prevState, [mail]: true };
      });
      return false;
    }
    return true;
  };
  const idValidCheck = () => {
    const nameRegex = /^[a-zA-Z가-힣0-9]{3,}$/;
    if (!userInput.id || !nameRegex.test(userInput.id)) {
      setInputErr((prevState) => {
        return { ...prevState, id: true };
      });
      return false;
    }
    return true;
  };
  const validCheck1 = () => {
    emailValidCheck(userInput.email1);
    if (emailValidCheck(userInput.email1)) {
      return true;
    }
    return false;
  };
  const validCheck2 = () => {
    emailValidCheck(userInput.email2);
    idValidCheck();
    if (emailValidCheck(userInput.email2) && idValidCheck()) {
      return true;
    }
    return false;
  };

  const onSubmit1 = (e) => {
    e.preventDefault();
    const isValid = validCheck1();
    if (!isValid) {
      console.log("fail");
      return;
    }
    //login();
  };
  const onSubmit2 = (e) => {
    e.preventDefault();
    const isValid = validCheck2();
    if (!isValid) {
      console.log("fail");
      return;
    }
    //login();
  };

  const handleInputChange = (e) => {
    const { value, id } = e.target;

    setUserInput((prev) => ({
      ...prev,
      [id]: value,
    }));

    setInputErr((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  return (
    <>
      <FWrapper onSubmit={onSubmit1}>
        <h3>아이디 찾기</h3>
        <p>
          회원가입에 사용한 이메일을 입력해주세요. 이메일로 아이디를
          보내드립니다.{" "}
        </p>
        <InputAuth
          label="이메일"
          type="email"
          value={userInput.email1}
          onChange={handleInputChange}
          id="email1"
          error={inputErr.email1}
          errmsg={inputErr.email1 && "올바른 이메일 형식으로 입력해주세요."}
        />
        <Btn btnText="확인" width="2rem" type="submit" />
      </FWrapper>
      <FWrapper onSubmit={onSubmit2}>
        <h3>비밀번호 찾기</h3>
        <p>
          이름과 이메일을 입력해주세요. 회원가입에 사용한 이메일로 임시
          비밀번호를 보내드립니다.{" "}
        </p>
        <InputAuth
          label="아이디"
          type="text"
          value={userInput.id}
          onChange={handleInputChange}
          id="id"
          error={inputErr.id}
          errmsg={inputErr.id && "특수문자 없이 3글자 이상 입력해주세요."}
        />
        <InputAuth
          label="이메일"
          type="email"
          value={userInput.email2}
          onChange={handleInputChange}
          id="email2"
          error={inputErr.email2}
          errmsg={inputErr.email2 && "올바른 이메일 형식으로 입력해주세요."}
        />
        <Btn btnText="확인" width="2rem" type="submit" />
      </FWrapper>
    </>
  );
};

const FWrapper = styled.form`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h3 {
    margin-bottom: 1rem;
  }
  input {
    margin: 0 auto;
  }
`;

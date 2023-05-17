import React from "react";
import styled from "styled-components";
import theme from "../components/theme";
import { Modal } from "../components/atoms/Modal";
import { Btn } from "../components/atoms/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CenterMenu } from "../components/CenterMenu";
import { InputAuth } from "../components/atoms/Input";
import { Wrapper } from "./Signup";

export const Request = () => {
  const isLogin = true;
  const navigate = useNavigate();
  const [createModal, setCreateModal] = useState(false);
  const [userInput, setUserInput] = useState({
    title: "",
    name: "",
    content: "",
    req: "",
  });
  const [inputErr, setInputErr] = useState({
    title: false,
    name: false,
    content: false,
    req: false,
  });
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

  const handleCreate = () => {
    //로그인이 되어 있지 않다면
    if (!isLogin) {
      setCreateModal(true);
      setTimeout(() => {
        setCreateModal(false);
        navigate("/login");
      }, 1000);
    }
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
  const titleValidCheck = () => {
    const nameRegex = /^[a-zA-Z가-힣0-9]{3,}$/;
    if (!userInput.title || !nameRegex.test(userInput.title)) {
      setInputErr((prevState) => {
        return { ...prevState, title: true };
      });
      return false;
    }
    return true;
  };
  const contentValidCheck = () => {
    if (userInput.content.length < 20) {
      setInputErr((prevState) => {
        return { ...prevState, content: true };
      });
      return false;
    }
    return true;
  };

  useEffect(() => {
    handleCreate();
  }, []);

  const validCheck = () => {
    idValidCheck();
    titleValidCheck();
    contentValidCheck();
    if (idValidCheck() && titleValidCheck() && contentValidCheck()) {
      return true;
    }
    return false;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = validCheck();
    if (!isValid) {
      console.log("fail");
      return;
    }
    //login();
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <CenterMenu />
      {createModal && (
        <Modal
          modalText={"로그인을 먼저 진행해주세요 로그인 페이지로 이동합니다 "}
        />
      )}
      <InputAuth
        label="전시 이름"
        type="title"
        value={userInput.title}
        onChange={handleInputChange}
        id="title"
        error={inputErr.title}
        errmsg={inputErr.title && "특수문자 없이 3글자 이상 입력해주세요."}
      />
      <InputAuth
        label="이름"
        type="id"
        value={userInput.id}
        onChange={handleInputChange}
        id="id"
        error={inputErr.id}
        errmsg={inputErr.id && "특수문자 없이 3글자 이상 입력해주세요."}
      />
      <InputAuth
        label="전시 내용"
        type="content"
        value={userInput.content}
        onChange={handleInputChange}
        id="content"
        height="20rem"
        error={inputErr.content}
        errmsg={inputErr.content && "20글자 이상 입력해주세요."}
      />
      <InputAuth
        label="요구 사항"
        type="req"
        value={userInput.req}
        onChange={handleInputChange}
        id="req"
        height="10rem"
      />
      <Btn btnText="의뢰하기" width="5rem" type="submit" />
    </Wrapper>
  );
};

import React from "react";
import styled from "styled-components";
import theme from "../components/theme";
import { Modal } from "../components/atoms/Modal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Request = () => {
  const isLogin = null;
  const navigate = useNavigate();
  const [createModal, setCreateModal] = useState(false);
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

  useEffect(() => {
    handleCreate();
  }, []);

  return (
    <>
      {createModal && (
        <Modal
          modalText={"로그인을 먼저 진행해주세요 로그인 페이지로 이동합니다 "}
        />
      )}
    </>
  );
};

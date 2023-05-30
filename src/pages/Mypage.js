import React, { useState, useEffect } from "react";
import { Btn } from "../components/atoms/Button";
import { InputAuth } from "../components/atoms/Input";
import styled from "styled-components";
import { Avatar } from "../components/atoms/Avatar";
import { Wrapper } from "./Login";
import { ImageUploader } from "../components/ImageUploader";
import axios from "axios";

export const Mypage = () => {
  const [name, setName] = useState(localStorage.getItem("nickname"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [phone, setPhone] = useState(localStorage.getItem("phone"));
  const [editing, setEditing] = useState(false);
  const [image, setImage] = useState(localStorage.getItem("profile_image"));

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
    localStorage.setItem("nickname", name);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    localStorage.setItem("email", email);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
    localStorage.setItem("phone", phone);
  };

  return (
    <MContainer>
      {editing ? (
        <Wrapper>
          <h2>My Page</h2>
          <div>
            프로필 이미지
            <ImageUploader
              onImageChange={(img) =>
                localStorage.setItem("profile_image", img)
              }
            />
          </div>
          <div>
            <InputAuth
              label="이름"
              type="name"
              value={name}
              onChange={handleChangeName}
              id="name"
            />
          </div>
          <div>
            <InputAuth
              label="이메일"
              type="email"
              value={email}
              onChange={handleChangeEmail}
              id="email"
            />
          </div>
          <div>
            <InputAuth
              label="전화 번호"
              type="tel"
              value={phone}
              onChange={handleChangePhone}
              id="tel"
            />
          </div>
          <div>
            <Btn btnText="저장" width="6rem" fontsize="0.8rem" type="submit" />
            <Btn
              btnText="취소"
              width="6rem"
              fontsize="0.8rem"
              type="button"
              onClick={handleCancelClick}
            />
          </div>
        </Wrapper>
      ) : (
        <Wrapper>
          <h3>my page</h3>
          <Avatar width="10rem" src={image} />
          <p>이름 : {name}</p>
          <p>이메일 : {email}</p>
          <p>전화 번호 : {phone}</p>
          <Btn
            btnText="수정"
            width="6rem"
            fontsize="0.8rem"
            type="button"
            onClick={handleEditClick}
          />
        </Wrapper>
      )}
    </MContainer>
  );
};

const MContainer = styled.div`
  padding: 1rem;
  p {
    color: white;
  }
  h2 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 2.5rem;
    line-height: 5rem;
    border-bottom: 0.1px solid white;
    margin-bottom: 2rem;
  }
`;

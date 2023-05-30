import React, { useState, useEffect } from "react";
import { Btn } from "../components/atoms/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Avatar } from "../components/atoms/Avatar";
import { Wrapper } from "./Login";
import axios from "axios";

export const Mypage = () => {
  const [name, setName] = useState(localStorage.getItem("nickname"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [phone, setPhone] = useState(localStorage.getItem("phone"));
  const [image, setImage] = useState(localStorage.getItem("profile_image"));

  const handleUserExpire = async () => {
    const accessToken = localStorage.getItem("authorization");
    const userId = localStorage.getItem("userId");
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/user/delete?userid=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MContainer>
      <Wrapper>
        <h3>my page</h3>
        <Avatar width="10rem" src={image} />
        <p>이름 : {name}</p>
        <p>이메일 : {email}</p>
        <p>전화 번호 : {phone}</p>
        <div>
          <Link to="/mypage/edit">
            <Btn btnText="수정" width="4rem" fontsize="0.8rem" type="button" />
          </Link>
          <Btn
            btnText="회원 탈퇴"
            width="6rem"
            fontsize="0.8rem"
            type="button"
            onClick={handleUserExpire}
          />
        </div>
      </Wrapper>
    </MContainer>
  );
};

const MContainer = styled.div`
  display: flex;
  justify-content: center;
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

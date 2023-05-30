import { useState, useEffect } from "react";
import { Btn } from "../components/atoms/Button";
import { InputAuth } from "../components/atoms/Input";
import styled from "styled-components";
import { Avatar } from "../components/atoms/Avatar";
import { Wrapper } from "./Login";
import { ImageUploader } from "../components/ImageUploader";
import axios from "axios";

export const Mypage = () => {
  const [user, setUser] = useState({
    name: "홍길동",
    id: "hyon2001",
    email: "hong@example.com",
    phone: "010-1234-5678",
  });

  const [editing, setEditing] = useState(false);
  const [image, setImage] = useState(null);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 데이터를 서버로 전송하는 로직
    setEditing(false);
  };

  const getUserData = async () => {
    const accessToken = localStorage.getItem("authorization");
    const userId = localStorage.getItem("userId");
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/user/find?userid=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const userData = {
          name: response.data.nickname,
          id: response.data.id,
          email: response.data.email ? response.data.email : "",
          phone: "",
        };
        setUser(userData);
      }
    } catch (error) {
      console.log(accessToken);
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <MContainer>
      <Btn
        btnText="user data loading"
        width="8rem"
        fontsize="0.8rem"
        type="submit"
        onClick={getUserData}
      />
      {editing ? (
        <Wrapper onSubmit={handleSubmit}>
          <h2>My Page</h2>
          <div>
            프로필 이미지
            <ImageUploader onImageChange={(img) => setImage(img)} />
          </div>
          <div>
            <InputAuth
              label="이름"
              type="name"
              value={user.name}
              onChange={handleInputChange}
              id="name"
            />
          </div>
          <div>
            <InputAuth
              label="아이디"
              type="id"
              value={user.id}
              onChange={handleInputChange}
              id="id"
            />
          </div>
          <div>
            <InputAuth
              label="이메일"
              type="email"
              value={user.email}
              onChange={handleInputChange}
              id="email"
            />
          </div>
          <div>
            <InputAuth
              label="전화 번호"
              type="tel"
              value={user.phone}
              onChange={handleInputChange}
              id="tel"
            />
          </div>
          <div>
            <Btn btnText="저장" width="6rem" fontsize="0.8rem" type="submit" />
            <Btn
              btnText="취소"
              width="6rem"
              fontsize="0.8rem"
              type="submit"
              onClick={handleCancelClick}
            />
          </div>
        </Wrapper>
      ) : (
        <Wrapper>
          <h3>my page</h3>
          <Avatar width="10rem" />
          <p>이름 : {user.name}</p>
          <p>아이디 : {user.id}</p>
          <p>이메일 : {user.email}</p>
          <p>전화 번호 : {user.phone}</p>
          <Btn
            btnText="수정"
            width="6rem"
            fontsize="0.8rem"
            type="submit"
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

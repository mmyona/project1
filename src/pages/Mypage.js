import { useState } from "react";
import { Btn } from "../components/atoms/Button";
import { InputAuth } from "../components/atoms/Input";
import styled from "styled-components";
import { Avatar } from "../components/atoms/Avatar";
import { Wrapper } from "./Signup";

export const Mypage = () => {
  const [user, setUser] = useState({
    name: "홍길동",
    id: "hyon2001",
    email: "hong@example.com",
    phone: "010-1234-5678",
  });

  const [editing, setEditing] = useState(false);
  const [profileImg, setProfileImg] = useState(null);

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProfileImg(reader.result);
    };
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
      <h3>마이페이지</h3>
      {editing ? (
        <Wrapper onSubmit={handleSubmit}>
          <Avatar width="10rem" src={profileImg} />
          <div>
            프로필 이미지
            <input type="file" accept="image/*" onChange={handleFileChange} />
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
              label="전화번호"
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
          <Avatar width="10rem" src={profileImg} />
          <p>이름: {user.name}</p>
          <p>아이디: {user.id}</p>
          <p>이메일: {user.email}</p>
          <p>전화번호: {user.phone}</p>
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
`;

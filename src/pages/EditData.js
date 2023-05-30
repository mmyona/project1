import { ImageUploader } from "../components/ImageUploader";
import { Wrapper } from "./Login";
import { Link } from "react-router-dom";
import { Btn } from "../components/atoms/Button";
import React, { useState } from "react";
import { InputAuth } from "../components/atoms/Input";

export const EditData = () => {
  const [name, setName] = useState(localStorage.getItem("nickname"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [phone, setPhone] = useState(localStorage.getItem("phone"));
  const [image, setImage] = useState(localStorage.getItem("profile_image"));

  const handleChangeName = (e) => {
    const newName = e.target.value;
    setName(newName);
    localStorage.setItem("nickname", newName);
  };

  const handleChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    localStorage.setItem("email", newEmail);
  };

  const handleChangePhone = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    localStorage.setItem("phone", newPhone);
  };
  return (
    <Wrapper>
      <h2>My Page</h2>
      <div>
        프로필 이미지
        <ImageUploader
          onImageChange={(img) => {
            const reader = new FileReader();
            reader.readAsDataURL(img);
            setImage(img);
            reader.onload = () => {
              localStorage.setItem("profile_image", reader.result);
            };
          }}
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
        <Link to="/mypage">
          <Btn btnText="저장" width="6rem" fontsize="0.8rem" type="submit" />
        </Link>
        <Link to="/mypage">
          <Btn btnText="취소" width="6rem" fontsize="0.8rem" type="button" />
        </Link>
      </div>
    </Wrapper>
  );
};

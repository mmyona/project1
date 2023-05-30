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
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAAAAADRE4smAAAER0lEQVR4Ae3BAQHDABCEMPAv+td2MrjE4yXTcvx5PGRqjo/HQ6bm+Hg8ZGqOjwfI9BwvTybpeMlUHQ+ZrgOZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNJk0mTSZNE8mzANkkg48XjI5x8PjIxNzvDw+MjHHy+NPJuX4ePzJpBwfjz+ZlOPzA+eHHvLCDDloAAAAAElFTkSuQmCC"></img>
        <ImageUploader
          onImageChange={(img) => {
            const reader = new FileReader();
            reader.readAsDataURL(img);
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

import React from "react";
import { useState } from "react";
import { postMembers } from "../apis/base";
import { useNavigate } from "react-router-dom";
import { Btn } from "../components/atoms/Button";
import { InputAuth } from "../components/atoms/Input";
import { Modal } from "../components/atoms/Modal";

import { Wrapper } from "./Signup";

import { Link } from "react-router-dom/dist";

export const Login = () => {
  const [userInput, setUserInput] = useState({
    id: "",
    password: "",
  });

  const [inputErr, setInputErr] = useState({
    id: false,
    password: false,
    signIn: false,
  });

  const [openModal, setOpenModal] = useState(false);

  //const navigate = useNavigate();
  //const dispatch = useDispatch();

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
  const passwordValidCheck = () => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/;
    if (!userInput.password || !passwordRegex.test(userInput.password)) {
      setInputErr((prevState) => {
        return { ...prevState, password: true };
      });
      return false;
    }
    return true;
  };

  const validCheck = () => {
    idValidCheck();
    passwordValidCheck();
    if (idValidCheck() && passwordValidCheck()) {
      return true;
    }
    return false;
  };

  /*const login = async () => {
		try {
			const body = userInput;
			const data = await postAuth(body);

			if (data.status === 200) {
				setOpenModal(true);
				setTimeout(() => {
					dispatch(
						getLoginUser({
							memberId: data.data,
						}),
					);
					localStorage.setItem("authorization", data.headers.authorization);
					dispatch(signin());
					setOpenModal(false);
					navigate("/");
				}, 1500);
			}
		} catch (e) {
			// console.log(e);
			setInputErr((prev) => ({
				...prev,
				signIn: true,
			}));
		}
	};*/

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
      {openModal && <Modal modalText="로그인 완료!" />}

      <div>
        <InputAuth
          label="아이디"
          type="id"
          value={userInput.id}
          onChange={handleInputChange}
          id="id"
          error={inputErr.id}
          errmsg={inputErr.id && "특수문자 없이 3글자 이상 입력해주세요."}
        />
      </div>
      <div>
        <InputAuth
          label="비밀번호"
          type="password"
          value={userInput.password}
          onChange={handleInputChange}
          id="password"
          error={inputErr.password}
          errmsg={
            inputErr.password &&
            "비밀번호는 영문, 숫자, 특수기호를 포함한 8자 이상으로 입력해주세요."
          }
        />
        {inputErr.signIn && <p>아이디 또는 비밀번호를 확인하세요.</p>}
      </div>
      <div className="w">
        <Link to="/signup">
          <Btn
            btnText="가입한 계정이 없나요? 회원가입 하러가기"
            width="17rem"
            fontsize="0.8rem"
            type="submit"
          />
        </Link>
        <Link to="/find">
          <Btn
            btnText="아이디/비밀번호 찾으러 가기"
            width="14rem"
            fontsize="0.8rem"
            type="submit"
          />
        </Link>
      </div>
      <div>
        <Btn btnText="로그인" width="3rem" type="submit" />
      </div>
    </Wrapper>
  );
};

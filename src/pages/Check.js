import { InputAuth } from "../components/atoms/Input";
import { useState } from "react";
import styled from "styled-components";
import { Btn } from "../components/atoms/Button";
import { useNavigate, useParams } from "react-router-dom";
import { PrivUnityListData } from "../dummy/PrivUnityListData";

export const Check = () => {
  const [key, setKey] = useState("");
  const [keyErr, setKeyErr] = useState(false);
  const navigate = useNavigate();
  const { unityId } = useParams();
  const PrivUnity = PrivUnityListData[unityId - 1];

  const handleChange = (e) => {
    setKey(e.target.value);
  };

  const CheckKey = (e) => {
    if (key == PrivUnity.key) {
      navigate(`/privlist/${unityId}`);
    } else {
      setKeyErr(true);
    }
  };

  return (
    <CheckContainer>
      <InputContainer>
        <InputAuth
          label="비밀번호를 입력하세요"
          type="key"
          value={key}
          onChange={handleChange}
          id="key"
          error={keyErr}
          errmsg={keyErr && "비밀번호가 틀렸습니다"}
        />
        <StyledBtn
          btnText="확인"
          width="3rem"
          fontsize="0.8rem"
          type="button"
          onClick={CheckKey}
        />
      </InputContainer>
    </CheckContainer>
  );
};

const CheckContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledBtn = styled(Btn)`
  margin-left: 1rem;
`;

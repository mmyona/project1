import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../components/theme";
import { Btn } from "../components/atoms/Button";
import { Modal } from "../components/atoms/Modal";
import { useState } from "react";

export const PrivUnityItem = (props) => {
  const userId = localStorage.getItem("userid");
  const [modalOpen, setModalOpen] = useState(false);
  const handlePrivate = () => {
    if (userId) {
      // 로그인된 상태면 감상 가능
      setModalOpen(false);
    } else {
      // 로그인되지 않은 상태면 모달 열기
      setModalOpen(true);
    }
  };

  return (
    <CContainer>
      {modalOpen && (
        <Modal
          modalText="로그인 이후 감상하실 수 있습니다"
          closeModal={() => setModalOpen(false)}
        />
      )}
      <Card
        style={{
          border: `1px solid ${theme.color.gray}`,
          position: "relative",
          zIndex: "1",
        }}
      >
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <CustomCardTitle>{props.title}</CustomCardTitle>
          <Card.Text>
            {props.text.length < 70
              ? props.text
              : props.text.substring(0, 70) + " . . . "}
          </Card.Text>
          <Link to={props.link}>
            <Btn
              btnText="Enter"
              width="4rem"
              type="submit"
              fontFamily="Bebas Neue"
              fontsize="1.4rem"
              color={theme.color.gray}
              onClick={() => handlePrivate()}
            />
          </Link>
        </Card.Body>
      </Card>
    </CContainer>
  );
};

const CContainer = styled.div`
  padding: 1rem;
  width: 20rem;
`;

const CustomCardTitle = styled(Card.Title)`
  font-size: 1.8rem;
  font-family: "Bebas Neue", sans-serif;
`;

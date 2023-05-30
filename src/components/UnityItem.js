import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../components/theme";
import { Btn } from "../components/atoms/Button";

export const UnityItem = (props) => {
  return (
    <CContainer>
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

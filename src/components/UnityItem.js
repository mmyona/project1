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
          width: props.width || "30rem",
          border: `1px solid ${theme.color.gray}`,
          position: "relative",
          zIndex: "1",
        }}
      >
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Link to={props.link}>
            <Btn btnText="관람" width="2rem" type="submit" />
          </Link>
        </Card.Body>
      </Card>
    </CContainer>
  );
};

const CContainer = styled.div`
  padding: 1rem;
`;

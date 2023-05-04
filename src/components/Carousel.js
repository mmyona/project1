import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Btn } from "../components/atoms/Button";

export const CarouselComponent = () => {
  const data = [
    {
      id: 1,
      title: "unity1",
      text: "The first",
      src: "images/The Imaginarium (2).png",
    },
    {
      id: 2,
      title: "unity2",
      text: "The second",
      src: "images/The Imaginarium (2).png",
    },
    {
      id: 3,
      title: "unity3",
      text: "The third",
      src: "images/The Imaginarium (2).png",
    },
    {
      id: 4,
      title: "unity4",
      text: "The forth",
      src: "images/The Imaginarium (2).png",
    },
    {
      id: 5,
      title: "unity5",
      text: "The fifth",
      src: "images/The Imaginarium (2).png",
    },
  ];
  return (
    <Container>
      <h1>Top 5 전시</h1>
      <Carousel>
        {data.map((item) => (
          <Carousel.Item>
            <img alt={item.title} src="images/The Imaginarium (2).png" />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link to={`/${item.title}`}>
                <Btn btnText="관람" width="2rem" type="submit" />
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
`;

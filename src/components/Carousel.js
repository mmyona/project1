import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

export const CarouselComponent = () => {
  return (
    <Container>
      <h1>Top 5 전시</h1>
      <Carousel>
        <Carousel.Item>
          <img alt="first slide" src="images/The Imaginarium (2).png" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="second slide" src="images/The Imaginarium (2).png" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="third slide" src="images/The Imaginarium (2).png" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="forth slide" src="images/The Imaginarium (2).png" />
          <Carousel.Caption>
            <h3>Forth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="fifth slide" src="images/The Imaginarium (2).png" />
          <Carousel.Caption>
            <h3>Fifth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
`;

import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Btn } from "../components/atoms/Button";
import theme from "./theme";
import { UnityListData } from "../dummy/UnityListData";

export const CarouselComponent = () => {
  return (
    <Container>
      <h1>Top 3</h1>
      <CustomCarousel>
        {UnityListData.map((item) => (
          <Carousel.Item key={item.id}>
            <img alt={item.title} src={item.src} />
            <Carousel.Caption>
              <h2>
                Top {item.id} : " {item.title} "
              </h2>
              <Link to={`/publist/${item.id}`}>
                <Btn
                  btnText="Enter"
                  width="4rem"
                  type="submit"
                  fontFamily="Bebas Neue"
                  fontsize="1.4rem"
                  color={theme.color.gray}
                  margin="0 0 2rem  0"
                />
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </CustomCarousel>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  h1 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 3rem;
  }
`;

const CustomCarousel = styled(Carousel)`
  .carousel {
    height: auto; /* 캐러셀 컴포넌트의 높이를 자동으로 조정합니다. */
  }
  .carousel-item {
    height: 40rem;
    img {
      max-width: 60%;
      height: 100%;
      object-fit: contain;
      bottom: 2rem;
      position: relative;
    }
  }

  .carousel-caption {
    h2 {
      font-family: "Bebas Neue", sans-serif;
      font-size: 2.5rem;
    }
    left: 50%;
    position: absolute;
    bottom: 0;
    transform: translateX(-50%);
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
`;

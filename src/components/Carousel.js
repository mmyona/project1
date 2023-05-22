import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Btn } from "../components/atoms/Button";
import theme from "./theme";

export const CarouselComponent = () => {
  const data = [
    {
      id: 1,
      title: "Chess",
      text: " 남녀노소 누구나 즐길 수 있는 보드게임인 체스를 컨셉으로 한 3D맵, 체스판이라는 무대 위에서 움직이는 것이 PLAYER의 머릿속에서 움직인다는 느낌을 준다.",
      src: "/images/chess.png",
    },
    {
      id: 2,
      title: "Park",
      text: "현실에서는 여러모로 전시가 힘든 공간이 있다. 대부분의 전시가 실내에서 이루어지는 이유가 바로 그것인데, 이를 기반으로 야외에서의 무대를 제작하기로 하였다.자연경관과 비슷한 느낌을 주는 공원, 특히 연못 위에서의 전시는 실현이 어렵기 때문에 공원이라는 컨셉의 3D맵은 보통의 전시에서는 느낄 수 없는 개방감을 선사해줄것이라 기대된다.",
      src: "/images/park.png",
    },
    {
      id: 3,
      title: "Plaza",
      text: " 위 두 맵과는 반대로 현실과 가장 비슷한 3D맵도 제작하였다. 직접 전시에 가지 않아도 된다는 느낌을 살리기 위해 실제 전시회를 참고하여 만들었다.맵에 놓인 주사위, 볼펜, 맵 중앙의 나무 등 여러모로 잡동사니를 두어 심심한 공간을 채워주었다.",
      src: "/images/plaza.png",
    },
    {
      id: 4,
      title: "unity4",
      text: "The forth",
      src: "/images/The Imaginarium (2).png",
    },
    {
      id: 5,
      title: "unity5",
      text: "The fifth",
      src: "/images/The Imaginarium (2).png",
    },
  ];

  return (
    <Container>
      <h1>Top 5</h1>
      <CustomCarousel>
        {data.map((item) => (
          <Carousel.Item key={item.id}>
            <img alt={item.title} src={item.src} />
            <Carousel.Caption>
              <h2>
                Top {item.id} : " {item.title} "
              </h2>
              <Link to={`/list/${item.id}`}>
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

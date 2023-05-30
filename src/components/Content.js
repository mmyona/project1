import styled from "styled-components";

export const Content = () => {
  return (
    <ContentStyle>
      <h3>맵 조작법</h3>
      <StyledImage src="/images/explain.png" alt="key explanation" />
      <p>위 조작법을 잘 익힌 뒤에 전시에 입장하시기 바랍니다. </p>
    </ContentStyle>
  );
};

const StyledImage = styled.img`
  opacity: 0.85;
  width: 30rem;
`;

const ContentStyle = styled.div`
  p {
    line-height: 2rem;
  }
  margin-bottom: 5rem;
`;

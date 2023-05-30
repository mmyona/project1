import styled from "styled-components";

export const Content = () => {
  return (
    <ContentStyle>
      <h3>맵 조작법</h3>

      <StyledImage src="/images/explain.png" alt="key explanation" />
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

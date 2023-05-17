import styled from "styled-components";

export const Content = () => {
  return (
    <div>
      <h3>맵 이동 방법</h3>
      <StyledImage src="/images/explain.png" alt="key explanation" />
    </div>
  );
};

const StyledImage = styled.img`
  opacity: 0.85;
  width: 30rem;
`;

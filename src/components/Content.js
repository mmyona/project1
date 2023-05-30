import styled from "styled-components";

export const Content = () => {
  return (
    <ContentStyle>
      <h3>맵 조작법</h3>
      <p>
        W / A / S / D + 마우스 오른쪽 버튼 : 이동 및 조작
        <br />
        마우스 휠 : 시점 변경
        <br />R : 위치 리셋
        <br />
        SPACE BAR : 점프
        <br />
        공중에서 SPACE BAR : 감속
        <br />
        TAB : 팝업 on/off
      </p>
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
`;

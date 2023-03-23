import styled from "styled-components";
import WriterInfo from "./WriterInfo";
import theme from "../settings/theme";

const PostSumContainer = styled.div`
  width: 361px;
  height: 160px;
  border-bottom: 1px solid ${theme.color.gray};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    .title {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 30px;
    }
    .content {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
    }
  }
`;

const PostSummary = ({ title, content }) => {
  return (
    <>
      <PostSumContainer>
        <div>
          <div className="title">{title || "title"}</div>
          <div className="content">{content || "content"}</div>
        </div>
        <WriterInfo />
      </PostSumContainer>
    </>
  );
};

export default PostSummary;
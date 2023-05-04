import React, { useState } from "react";
import styled from "styled-components";
import { FaCamera } from "react-icons/fa";
import theme from "./theme";
import { Avatar } from "./atoms/Avatar";

export const ImageUploader = React.forwardRef((props, ref) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    props.onImageChange(e.target.files[0]);
  };

  return (
    <ImageUploaderWrapper>
      <Input type="file" onChange={handleImageChange} {...props.register} />
      {image ? (
        <Avatar imgURL={URL.createObjectURL(image)} width="12rem" />
      ) : (
        <StyledDiv>
          <StyledFaCamera width={props.iconWidth} height={props.iconHeight} />
        </StyledDiv>
      )}
    </ImageUploaderWrapper>
  );
});

const Input = styled.input`
  display: none;
`;

const ImageUploaderWrapper = styled.label`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 12rem;
`;

const StyledFaCamera = styled(FaCamera)`
  width: 3rem;
  height: 3rem;
  color: ${theme.color.gray};
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 12rem;
  border: 0.1rem solid ${theme.color.gray};
  border-radius: 50%;
`;

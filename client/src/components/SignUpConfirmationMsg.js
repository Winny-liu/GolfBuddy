import React from "react";
import styled from "styled-components";

const SignUpConfirmationMsg = () => (
  <Wrapper>
    <p>Thanks for Signing up GolfBuddy!</p>
    
    
  </Wrapper>
);

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  z-index: 4;
`;

export default SignUpConfirmationMsg;
import styled from "styled-components";
import golfball from "../assets/golfball.jpg";
const UserCard = () => {
  return (
    <>
      <Wrapper1>
        <Container>
          <Name>winny</Name>
          <Img src={golfball} />
        </Container>
        <Box>
          <Gender>Female</Gender>
          <Handicap>Handicap:10</Handicap>

          <Age>Age:34</Age>

          <Email>winny@hotmail.com</Email>
        </Box>
      </Wrapper1>
    </>
  );
};
const Img = styled.img`
  display: flex;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: white;

  margin: 20px;
`;

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 220px;
  height: 300px;
  border-radius: 20px;
  background-color: #b9e769;
`;
const Name = styled.div`
  display: flex;
  position: relative;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 20px;
  color: white;
`;
const Email = styled.div``;
const Zipcode = styled.div``;
const Gender = styled.div``;
const Handicap = styled.div``;
const Age = styled.div``;

const Container = styled.div``;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 80px;
  background-color: #e1eec7;
  bottom: 0;
  width: 100%;
  padding: 10px;

  bottom: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export default UserCard;

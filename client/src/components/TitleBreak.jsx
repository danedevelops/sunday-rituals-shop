import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fedcc6;
  font-size: 30px;
`;

const Title = styled.h3`
  margin-top: 40px;
`;

const TitleBreak = () => {
  return (
    <Container>
      <Title>Featured Products</Title>
    </Container>
  );
};

export default TitleBreak;

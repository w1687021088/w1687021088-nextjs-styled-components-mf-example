// @ts-ignore
import styled from "styled-components";

function Card() {
  return <>
    <Container>common Card Components</Container>
  </>
}

export default Card

const Container = styled.div`
  line-height: 80px;
  margin: 20px 0;
  background-color: blueviolet;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`

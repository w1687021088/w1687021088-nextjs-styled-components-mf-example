import Card from "@/components/card";
// @ts-ignore
import styled from "styled-components";


function Common() {
  return (
    <>
      <main >
        <ScText>Common project</ScText>
        <Card />
      </main>
    </>
  )
}

export default Common

const ScText = styled.div`
  font-size: 14px;
  color: #171616;
  text-align: center;
  line-height: 80px;
  border: 1px solid #ff885a;
`

// @ts-ignore
import styled from "styled-components";
import dynamic from 'next/dynamic'

// @ts-ignore
const CommonCardComponent = dynamic(() => import('common/card'), {
  ssr: false
})


export default function MyApp() {
  return (
    <>
      <main>
        <ScText>MyApp project</ScText>
        <CommonCardComponent />
      </main>
    </>
  )
}
const ScText = styled.div`
  font-size: 14px;
  color: #171616;
  text-align: center;
  line-height: 80px;
  border: 1px solid #3f9bab;
`

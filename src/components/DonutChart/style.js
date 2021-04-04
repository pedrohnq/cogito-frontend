import styled from 'styled-components'


export const ChartArea = styled.div`
  display: flex;
  width: calc(100vw - 200px);
  z-index: 30;
  justify-content: center;
  align-items: center;
  height: calc(70vh - 66px);

  @media only screen and (max-width: 800px) {
    width: 100vw;
  }
`
import styled from 'styled-components'

const HeaderBase = styled.header`
  background-color: #0e49b5;
  height: 60vh;
  width: 100%;
  color: white;
  border-bottom-right-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

HeaderBase.Top = styled.div`
  height: auto;
  padding: 10px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`

HeaderBase.Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`

HeaderBase.Title = styled.h2`
  margin: 0;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
`

HeaderBase.Image = styled.img`
  width: 70vw;
  max-width: 400px;
  height: auto;
`

export default HeaderBase

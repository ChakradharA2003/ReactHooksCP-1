// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #161617;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const SubContainer = styled.div`
  height: 70%
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
export const LockImage = styled.img`
  height: 200px;
  width: 200px;
`
export const LockDescription = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 400;
`
export const Button = styled.button`
  text-align: center;
  background-color: #06b6d4;
  border-width: 0px;
  border-radius: 10px;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Roboto';
  padding: 5px 10px 5px 10px;
  align-self: center;
`

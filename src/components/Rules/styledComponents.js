import styled from 'styled-components'

export const PopupContainer = styled.div`
  align-self: flex-end;
  margin: 20px;
`

export const PopupModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  height: 60vh;
  width: 50vw;
  margin: 10px;

  @media screen and (max-width: 728px) {
    width: 280px;
    height: 300px;
  }
`

export const PopupImage = styled.img`
  align-self: center;
  margin-bottom: 30px;
  width: 300px;
  height: 400px;
  @media screen and (max-width: 728px) {
    width: 220px;
    height: 280px;
  }
`
export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  align-self: flex-end;
`

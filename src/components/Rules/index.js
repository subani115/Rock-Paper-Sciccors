import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  PopupContainer,
  PopupImage,
  PopupModal,
  CloseButton,
} from './styledComponents'

const Rules = () => (
  <PopupContainer>
    <Popup
      modal
      trigger={<button type="button">Rules</button>}
      position="top center"
    >
      {close => (
        <PopupModal>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine size={25} />
          </CloseButton>
          <PopupImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </PopupModal>
      )}
    </Popup>
  </PopupContainer>
)
export default Rules

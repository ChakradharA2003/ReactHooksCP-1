// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  SubContainer,
  LockContainer,
  LockImage,
  LockDescription,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isLock, setLock] = useState(false)
  const onClickedButton = () => setLock(prevState => !prevState)
  const lockImage = isLock
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const lockImageAlt = isLock ? 'unlock' : 'lock'
  const lockDescription = isLock
    ? 'Your Device is Unlocked'
    : 'Your Device is locked'
  const buttonText = isLock ? 'Lock' : 'Unlock'
  return (
    <MainContainer>
      <SubContainer>
        <LockContainer>
          <LockImage src={lockImage} alt={lockImageAlt} />
          <LockDescription>{lockDescription}</LockDescription>
        </LockContainer>
        <Button type="button" onClick={onClickedButton} buttonText={buttonText}>
          {buttonText}
        </Button>
      </SubContainer>
    </MainContainer>
  )
}
export default Unlock

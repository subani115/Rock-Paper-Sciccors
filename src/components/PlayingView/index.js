import {Component} from 'react'

import Rules from '../Rules'

import {
  MainContainer,
  NavbarContainer,
  NavbarHeading,
  ScoreContainer,
  ScoreHeading,
  GameImage,
  GameButtonContainer,
  GameImageButton,
  ResultScorePara,
  GameResultContainer,
  YouOpponent,
  ResultImageContainer,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class PlayingView extends Component {
  state = {
    score: 0,
    isGameRunning: true,
    text: 'YOU WON',
  }

  verifyResult = (yourChoice, opponentChoice) => {
    if (yourChoice.id === 'ROCK') {
      switch (opponentChoice.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (yourChoice.id === 'PAPER') {
      switch (opponentChoice.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (opponentChoice.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkResult = id => {
    const {score} = this.state
    const opponentChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const yourChoice = choicesList.filter(each => each.id === id)
    const result = this.verifyResult(yourChoice[0], opponentChoice)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      isGameRunning: false,
      score: newScore,
      text: result,
      newArray: [yourChoice[0], opponentChoice],
    })
  }

  //   onClickGenerateRockImage = () => {
  //     this.setState({isGameRunning: false, activeImage: choicesList[0].imageUrl})
  //   }

  //   onClickGenerateScissorsImage = () => {
  //     this.setState({isGameRunning: false, activeImage: choicesList[1].imageUrl})
  //   }

  //   onClickGeneratePaperImage = () => {
  //     this.setState({isGameRunning: false, activeImage: choicesList[2].imageUrl})
  //   }

  restartGame = () => {
    this.setState({isGameRunning: true})
  }

  renderGameStarted = () => (
    <GameButtonContainer>
      <GameImageButton
        type="button"
        onClick={() => this.checkResult(choicesList[0].id)}
        data-testid="rockButton"
      >
        <GameImage
          src={choicesList[0].imageUrl}
          key={choicesList[0].id}
          alt={choicesList[0].id}
        />
      </GameImageButton>
      <GameImageButton
        type="button"
        onClick={() => this.checkResult(choicesList[1].id)}
        data-testid="scissorsButton"
      >
        <GameImage
          src={choicesList[1].imageUrl}
          key={choicesList[1].id}
          alt={choicesList[1].id}
        />
      </GameImageButton>

      <GameImageButton
        type="button"
        onClick={() => this.checkResult(choicesList[2].id)}
        data-testid="paperButton"
      >
        <GameImage
          src={choicesList[2].imageUrl}
          key={choicesList[2].id}
          alt={choicesList[2].id}
        />
      </GameImageButton>
    </GameButtonContainer>
  )

  renderGameResult = () => {
    const {newArray, text} = this.state

    return (
      <GameResultContainer>
        <YouOpponent>
          <ResultImageContainer>
            <ResultScorePara>You</ResultScorePara>
            <GameImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultScorePara>Opponent</ResultScorePara>
            <GameImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultImageContainer>
        </YouOpponent>
        <ResultScorePara>{text}</ResultScorePara>
        <div>
          <button type="button" onClick={this.restartGame}>
            PLAY AGAIN
          </button>
        </div>
      </GameResultContainer>
    )
  }

  render() {
    const {score, isGameRunning} = this.state

    return (
      <MainContainer>
        <NavbarContainer>
          <div>
            <NavbarHeading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </NavbarHeading>
          </div>
          <ScoreContainer>
            <ScoreHeading>SCORE</ScoreHeading>
            <ScoreHeading>{score}</ScoreHeading>
          </ScoreContainer>
        </NavbarContainer>

        {/* place the render code here */}
        {isGameRunning ? this.renderGameStarted() : this.renderGameResult()}

        <Rules />
      </MainContainer>
    )
  }
}
export default PlayingView

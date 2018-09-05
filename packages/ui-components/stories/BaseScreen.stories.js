import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import Wrapper from "../src/Wrapper"
import BaseScreen from "../src/BaseScreen"
import MenuBar from "../src/MenuBar"
import AboutContent from "../src/BaseScreen/AboutContent"
import PostContent from "../src/BaseScreen/PostContent"
import SubmittedQuestion from "../src/SubmittedQuestion"

const SUBMIT_QUESTION_STARTED = "SUBMIT_QUESTION_STARTED"
const CLOSE_POST_QUESTION = "CLOSE_POST_QUESTION"
const MAIN_MENU_STATUS_CHANGE = "MAIN_MENU_STATUS_CHANGE"
const CONNECT_MENU_STATUS_CHANGE = "CONNECT_MENU_STATUS_CHANGE"

const onSubmit = text => {
  action(SUBMIT_QUESTION_STARTED)(
    JSON.stringify({
      type: SUBMIT_QUESTION_STARTED,
      content: text
    })
  )
  linkTo("Base Screen", "After Submission")()
}

const onWindowClose = () => {
  action(CLOSE_POST_QUESTION)(
    JSON.stringify({ type: CLOSE_POST_QUESTION, status: "close" })
  )
  linkTo("Base Screen", "About")()
}

const openMenu = () => {
  action(MAIN_MENU_STATUS_CHANGE)(
    JSON.stringify({ type: MAIN_MENU_STATUS_CHANGE, status: "open" })
  )
  linkTo("Menu Open", "Hamburger Menu")()
}

const openConnectMenu = () => {
  action(CONNECT_MENU_STATUS_CHANGE)(
    JSON.stringify({ type: CONNECT_MENU_STATUS_CHANGE, status: "open" })
  )
  linkTo("Menu Open", "Connect Menu")()
}

class About extends React.Component {
  state = {
    quotes: [
      "working to improve the lives of young women of color in NYC",
      "securing voting rights for all people",
      "making sure we are treated fairly. All of us."
    ],
    activeIndex: 0
  }
  advance = () => {
    if (this.mounted) {
      let activeIndex = (this.state.activeIndex += 1)
      if (activeIndex >= this.state.quotes.length) {
        activeIndex = 0
      }
      this.setState({ activeIndex })
    }
  }
  componentDidMount() {
    this.mounted = true
    this.interval = setInterval(this.advance, 1850)
  }
  componentWillUnmount() {
    this.mounted = false
  }
  render() {
    const { activeIndex, quotes } = this.state
    return (
      <Wrapper>
        <MenuBar onMenuClick={openMenu} onConnectClick={openConnectMenu} />
        <BaseScreen>
          <AboutContent quotes={quotes} activeIndex={activeIndex} />
        </BaseScreen>
        />
      </Wrapper>
    )
  }
}

storiesOf("Base Screen", module)
  .add("About", () => <About />)
  .add("Posting", () => (
    <Wrapper>
      <MenuBar onMenuClick={openMenu} onConnectClick={openConnectMenu} />
      <BaseScreen>
        <PostContent handleSubmit={onSubmit} />
      </BaseScreen>
    </Wrapper>
  ))
  .add("After Submission", () => (
    <Wrapper>
      <MenuBar onMenuClick={openMenu} onConnectClick={openConnectMenu} />
      <SubmittedQuestion
        handleWindowClose={onWindowClose}
        postQuestionQuote="Your mind made approximately 4.5 million synaptic connections to get you to this point today. We invite you to share a few million more with the people who make up Resonance."
      />
    </Wrapper>
  ))

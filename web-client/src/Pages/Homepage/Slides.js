import UIComponents from "ui-components"
import { connect } from "react-redux"
import Core from "core"
const AboutContent = UIComponents.aboutContent

const mapState = (state, props) => {
  return {
    slides: [
      "Resonance is made of people around the world living as catalysts for a just world, and you can find them [here](/)"
    ]
  }
}

const mapDispatch = dispatch => {
  return {
    signOut: () => dispatch({ type: Core.userInfo.actions.TOKEN_REVOKED })
  }
}

export default connect(mapState, mapDispatch)(AboutContent)

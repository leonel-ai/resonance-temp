import React from "react"
import { withStyles } from "material-ui/styles"
import Typography from "material-ui/Typography"
import BlueDivider from "../Assets/blue-divider.svg"
import { format } from "date-fns"
import GreenBG from "../Assets/res-support.svg"
import ChatIcon from "../Assets/feedback.svg"
import HandIcon from "../Assets/volunteer.svg"
import BullHornIcon from "../Assets/spread_word.svg"
import DollarIcon from "../Assets/contribute.svg"

const styles = theme => ({
  howYouCanSupport: {
    background: `url(${GreenBG}) no-repeat`,
    maxWidth: 686,
    height: 224,
    padding: 23
  },
  icon: {
    width: 72,
    height: 85
  },
  supportTitle: {
    color: "white",
    textTransform: "uppercase"
  },
  iconImage: {
    width: 72,
    height: 85,
    maxWidth: "100%"
  },
  supportIcons: {
    marginTop: 40,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center "
  }
})
const HowYouCanSupport = props => {
  const {
    classes,
    spread_word_link,
    financial_support_link,
    volunteer_link,
    feedback_link
  } = props

  if (
    !spread_word_link &&
    !financial_support_link &&
    !volunteer_link &&
    !feedback_link
  ) {
    return null
  }

  return (
    <div className={classes.howYouCanSupport}>
      <Typography variant={"title"} className={classes.supportTitle}>
        How You Can Support
      </Typography>

      <div className={classes.supportIcons}>
        {spread_word_link && (
          <div className={classes.icon}>
            <a href={spread_word_link} alt="Spread the Word link">
              <img
                src={BullHornIcon}
                className={classes.iconImage}
                alt="Spread the Word link"
              />
            </a>
          </div>
        )}

        {financial_support_link && (
          <div className={classes.icon}>
            <a href={financial_support_link} alt="Financial Support">
              <img
                src={DollarIcon}
                className={classes.iconImage}
                alt="Financial Support"
              />
            </a>
          </div>
        )}

        {feedback_link && (
          <div className={classes.icon}>
            <a href={feedback_link} alt="feedback link">
              <img
                src={ChatIcon}
                className={classes.iconImage}
                alt="feedback link"
              />
            </a>
          </div>
        )}

        {volunteer_link && (
          <div className={classes.icon}>
            <a href={volunteer_link} alt={"Volunteer Link"}>
              <img
                src={HandIcon}
                className={classes.iconImage}
                alt={"Volunteer Link"}
              />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(HowYouCanSupport)

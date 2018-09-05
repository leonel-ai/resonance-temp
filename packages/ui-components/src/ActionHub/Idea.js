import React from "react"
import { withStyles } from "material-ui/styles"
import Typography from "material-ui/Typography"
import BlueDivider from "../Assets/blue-divider.svg"
import { format } from "date-fns"
import HowYouCanSupport from "./HowYouCanSupport"
import Button from "material-ui/Button"
import { Edit } from "material-ui-icons"
import ProfileCard from "../ProfileCard"

const formatTimestamp = unix_timestamp => {
  const date = new Date(unix_timestamp * 1000)
  return format(date, "MMMM D, YYYY")
}

const styles = theme => ({
  title: {
    color: "#4B9831",
    margin: "50px 0 24px 0"
  },
  date: {
    color: "#CACACA",
    marginTop: 53
  },
  description: {
    maxWidth: 673,
    marginTop: 63,
    marginBottom: 63
  },
  supportTitle: {
    color: "#ffffff",
    fontSize: 16,
    textTransform: "uppercase"
  },
  editButton: {
    position: "fixed",
    right: 72,
    bottom: 72,
    cursor: "pointer"
  },
  postCard: {
    background: "#fff",
    padding: "4.0625rem 3.125rem"
  },
  blue: {
    background: `url(${BlueDivider}) repeat-x`,
    height: 8
  },
  profileCard: {
    margin: "3em 0"
  }
})

const Idea = props => {
  const { idea, classes, canEdit, editIdea } = props
  const {
    id,
    title,
    description,
    updated_at,
    spread_word_link,
    financial_support_link,
    volunteer_link,
    feedback_link,
    user
  } = idea

  return (
    <div className={classes.postCard}>
      <Typography variant="display2" className={classes.title}>
        {title}
      </Typography>
      <div className={classes.blue} />
      <Typography variant="body2" className={classes.date}>
        {formatTimestamp(updated_at)}
      </Typography>
      <div className={classes.profileCard}>
        <ProfileCard {...user} />
      </div>
      <Typography className={classes.description}>{description}</Typography>
      <HowYouCanSupport
        spread_word_link={spread_word_link}
        financial_support_link={financial_support_link}
        volunteer_link={volunteer_link}
        feedback_link={feedback_link}
      />

      {canEdit && (
        <div className={classes.editButton}>
          <Button
            onClick={editIdea}
            variant="fab"
            color="primary"
            aria-label="Edit"
          >
            <Edit />
          </Button>
        </div>
      )}
      {props.children}
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(Idea)

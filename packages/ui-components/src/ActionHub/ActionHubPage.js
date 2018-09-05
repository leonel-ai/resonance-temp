import React from "react"
import { withStyles } from "material-ui"
import Typopgraphy from "material-ui/Typography"
import HowYouCanSupport from "./HowYouCanSupport"
import Grid from "material-ui/Grid"
import { Link } from "react-router-dom"
import OrangeDivider from "../Assets/orange-divider.svg"
import BlueDivider from "../Assets/blue-divider.svg"
import ProfileCard from "../ProfileCard"

const ideaListStyles = {
  actionHub: {
    textAlign: "left",
    color: "#4B9831",
    marginTop: 50,
    marginBottom: 50
  },
  overview: {
    background: "#d8d8d8",
    height: 324,
    padding: "1em 20px",
    overflow: "hidden"
  },
  readMore: {
    color: "#ED7F33",
    fontWeight: "bold",
    fontFamily: "GT-Pressura-Bold",
    textDecoration: "none"
  },
  readMoreContainer: {
    background: "#d8d8d8",
    paddingLeft: 20,
    padding: "1em 0"
  },
  ideaTitle: {
    fontFamily: "GT-Pressura-Bold"
  },
  divider: {
    maxWidth: "100%",
    overflow: "hidden"
  },
  container: {
    padding: "1em"
  }
}

const truncate = words => {
  return (words || "")
    .split("")
    .slice(0, 240)
    .join("")
}

const BareIdea = props => {
  const {
    classes,
    id,
    title,
    description,
    onIdeaSelection,
    spread_word_link,
    financial_support_link,
    volunteer_link,
    feedback_link,
    user
  } = props
  return (
    <div>
      <div className={classes.overview}>
        <Typopgraphy variant="title" className={classes.ideaTitle}>
          {title}
        </Typopgraphy>
        <Typopgraphy variant="body2" className={classes.body}>
          {truncate(description)}
        </Typopgraphy>
      </div>
      <Typopgraphy variant="body2" className={classes.readMoreContainer}>
        <Link
          to={`/act/${id}`}
          onClick={onIdeaSelection}
          className={classes.readMore}
        >
          READ MORE
        </Link>
      </Typopgraphy>
      <HowYouCanSupport
        spread_word_link={spread_word_link}
        financial_support_link={financial_support_link}
        volunteer_link={volunteer_link}
        feedback_link={feedback_link}
      />
      <ProfileCard variant="tiny" {...user} />
      <div
        style={{
          background: `url(${OrangeDivider}) no-repeat`,
          height: 8,
          margin: "8px 1px"
        }}
      />{" "}
    </div>
  )
}
export const Idea = withStyles(ideaListStyles, { withTheme: true })(BareIdea)

const IdeaList = props => {
  const { classes, ideas, onIdeaSelection } = props
  return (
    <div className={classes.container}>
      <Typopgraphy variant="display2" className={classes.actionHub}>
        Action Hub
      </Typopgraphy>
      <img src={BlueDivider} />
      <Grid container spacing={40}>
        {ideas.map(idea => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={idea.id}>
            <Idea {...idea} onClick={onIdeaSelection} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

IdeaList.defaultProps = {
  ideas: []
}

export default withStyles(ideaListStyles, { withTheme: true })(IdeaList)

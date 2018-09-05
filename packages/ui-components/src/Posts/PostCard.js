import React, { Component } from "react"
import { withStyles } from "material-ui/styles"
import Card, { CardHeader, CardActions, CardContent } from "material-ui/Card"
import { Link } from "react-router-dom"
import Avatar from "material-ui/Avatar"
import Typography from "material-ui/Typography"
import Button from "material-ui/Button"
import OrangeDivider from "../Assets/orange-divider.svg"

const styles = theme => ({
  card: {
    margin: "0 0 5rem 0",
    boxShadow: "0 0"
  },
  cardContent: {
    paddingBottom: "0"
  },
  headerWrapper: {
    display: "flex"
  },
  headerContent: {
    marginBottom: "0.5rem",
    height: 100,
    overflowWrap: "break-word",
    overflow: "hidden"
  },
  avatar: {
    backgroundColor: "#ff7400",
    margin: "0 1rem 0 0",
    width: 70,
    height: 70
  },
  cardTitle: {
    fontSize: "1.6rem",
    "& > a": {
      color: "rgba(0, 0, 0, 0.87)",
      textDecoration: "none"
    }
  },
  date: {
    fontSize: "1.4rem"
  },
  bodyContent: {
    fontSize: "1.1rem",
    height: 150,
    overflowWrap: "break-word",
    overflow: "hidden"
  },
  button: {
    color: "#ff7630",
    fontFamily: "GT-Pressura-Bold",
    fontSize: "1.3rem"
  }
})

class PostCard extends Component {
  shortenMessage = string => {
    let shortString
    if (string.length > 20) {
      return (shortString = string.slice(0, 150) + "...")
    }
  }

  render() {
    const {
      classes,
      title,
      publishedAtFormatted,
      content_plain_text = "",
      unread,
      postLink
    } = this.props

    return (
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.headerWrapper}>
            {unread && (
              <Avatar aria-label="Unread" className={classes.avatar} />
            )}
            <div className={classes.headerContent}>
              <Typography variant="title" className={classes.cardTitle}>
                <Link to={postLink}>{title}</Link>
              </Typography>
              <Typography variant="subheading" className={classes.date}>
                {publishedAtFormatted}
              </Typography>
            </div>
          </div>
          <Typography variant="body2" className={classes.bodyContent}>
            {this.shortenMessage(content_plain_text)}
          </Typography>
        </CardContent>
        <CardActions disableActionSpacing>
          <Button
            component={Link}
            to={postLink}
            size="medium"
            className={classes.button}
          >
            Read More
          </Button>
        </CardActions>
        <div
          style={{
            background: `url(${OrangeDivider}) no-repeat`,
            height: 10
          }}
        />
      </Card>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PostCard)

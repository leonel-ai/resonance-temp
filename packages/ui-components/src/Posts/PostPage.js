import React, { Component } from "react"
import { withStyles } from "material-ui/styles"
import Typography from "material-ui/Typography"
import ReactMarkdown from "react-markdown"
import BlueDivider from "../Assets/blue-divider.svg"
import ReactAudioPlayer from "react-audio-player"
import ReactPlayer from "react-player"
import Button from "material-ui/Button"
import { Edit } from "material-ui-icons"
import ProfileCard from "../ProfileCard"

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
    marginBottom: "0.5rem"
  },
  avatar: {
    backgroundColor: "#ff7400",
    margin: "0 1rem 0 0",
    width: 70,
    height: 70
  },
  cardTitle: {
    fontFamily: "GT-Pressura-Bold",
    fontSize: 51.8,
    fontWeight: "bold",
    color: "#269b15",
    marginTop: "1em"
  },
  date: {
    fontSize: "1.4rem"
  },
  bodyContent: {
    fontSize: "1.1rem"
  },
  button: {
    color: "#ff7630",
    fontFamily: "GT-Pressura-Bold",
    fontSize: "1.3rem"
  },
  body: {
    fontFamily: "Atlas Grotesk Web",
    fontSize: 13.3,
    lineHeight: 1.56,
    letterSpacing: 1.5,
    textAlign: "left",
    maxWidth: 1020,
    "& img": {
      maxWidth: "100%"
    }
  },
  editButton: {
    position: "fixed",
    right: 72,
    bottom: 72,
    cursor: "pointer"
  },
  postCard: {
    background: "#fff",
    padding: "4.0625rem 3.125rem",
    marginBottom: "5em"
  },
  blue: {
    background: `url(${BlueDivider}) repeat-x`,
    height: 8
  },
  profile: {
    margin: "3em 0"
  }
})

const PostPage = props => {
  const {
    classes,
    title,
    publishedAtFormatted,
    content,
    content_plain_text,
    unread,
    onPostSelection,
    type,
    url,
    file_url,
    canEdit,
    editPost,
    user,
    description
  } = props

  return (
    <div className={classes.postCard}>
      <div className={classes.headerWrapper}>
        <div className={classes.headerContent}>
          <Typography variant="display1" className={classes.cardTitle}>
            {title}
          </Typography>
          <div className={classes.blue} />
          <Typography variant="subheading" className={classes.date}>
            {publishedAtFormatted}
          </Typography>
        </div>
      </div>

      <Typography variant="body2" className={classes.date}>
        {description}
      </Typography>
      {file_url &&
        type !== "Photo" &&
        type !== "Audio" && <img src={file_url} style={{ maxWidth: "100%" }} />}

      <div className={classes.profile}>
        <ProfileCard {...user} />
      </div>

      <Typography variant="body2" className={classes.body}>
        {type === "Blog" && (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        )}
        {type === "Link" && <a href={url}>{url}</a>}
        {type === "Photo" && (
          <img src={file_url} style={{ maxWidth: "100%" }} />
        )}
        {type === "Audio" && <ReactAudioPlayer src={file_url} controls />}
        {type === "Video" && <ReactPlayer url={url} playing />}

        {canEdit && (
          <div className={classes.editButton}>
            <Button
              onClick={editPost}
              variant="fab"
              color="primary"
              aria-label="Edit"
            >
              <Edit />
            </Button>
          </div>
        )}
      </Typography>
      {props.children}
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(PostPage)

import React from "react"
import { Link } from "react-router-dom"
import { withStyles } from "material-ui/styles"
import Typography from "material-ui/Typography"
import Card from "./Card"
import OrangeDivider from "../Assets/orange-divider.svg"

const styles = theme => ({
  card: {
    padding: "10px 60px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  profileCard: {
    margin: "66px 33px"
  },
  img: {
    width: 222,
    height: 222,
    margin: 33
  },
  currentUserCard: {
    background: "#f9f2d7",
    padding: 40,
    textAlign: "center"
  }
})
const ProfileCard = props => {
  const {
    id,
    profile_image_url,
    alias,
    location,
    profile,
    classes,
    currentUserId
  } = props

  return (
    <React.Fragment>
      {currentUserId === id && (
        <div className={classes.currentUserCard}>
          <Typography variant="title" component={Link} to={"/me"}>
            This is your profile! Update it and share with other Resonators.
          </Typography>
        </div>
      )}

      <div className={classes.card}>
        <img src={profile_image_url} className={classes.img} />
        <div className={classes.profile}>
          <Typography variant="title" className={classes.title}>
            {alias}
          </Typography>
          <div
            style={{
              background: `url(${OrangeDivider}) no-repeat`,
              height: 8,
              margin: "8px 1px"
            }}
          />
          <Typography variant="body2" className={classes.title}>
            {profile}
          </Typography>
        </div>
      </div>
      <div className={classes.profileCard}>
        <Card
          id={id}
          profile={profile}
          profile_image_url={profile_image_url}
          alias={alias}
          location={location}
        />
      </div>
    </React.Fragment>
  )
}

ProfileCard.defaultProps = {}

export default withStyles(styles, { withTheme: true })(ProfileCard)

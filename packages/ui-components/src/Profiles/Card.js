import React from "react"
import { Link } from "react-router-dom"
import { withStyles } from "material-ui/styles"
import Typography from "material-ui/Typography"

const styles = theme => ({
  card: {
    background: "#f9f2d7",
    padding: "10px 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  tinyCard: {
    background: "#f9f2d7",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  img: {
    width: 66,
    height: 66,
    margin: 10
  },
  link: {
    textDecoration: "none"
  }
})
const ProfileCard = props => {
  const {
    variant,
    id,
    profile_image_url,
    alias,
    location,
    profile,
    classes
  } = props

  return (
    <Link to={`/profiles/${id}`} className={classes.link}>
      <div className={variant === "large" ? classes.card : classes.tinyCard}>
        <img src={profile_image_url} className={classes.img} />
        <Typography variant="title" className={classes.title}>
          {alias}
        </Typography>
        {variant === "large" && (
          <React.Fragment>
            <Typography variant="body2" className={classes.subTitle}>
              {profile}
            </Typography>
            <Typography variant="body2" className={classes.subTitle}>
              {location}
            </Typography>
          </React.Fragment>
        )}
      </div>
    </Link>
  )
}

ProfileCard.defaultProps = {
  variant: "large"
}

export default withStyles(styles, { withTheme: true })(ProfileCard)

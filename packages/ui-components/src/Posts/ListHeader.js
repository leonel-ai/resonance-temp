import React from "react"
import { withStyles } from "material-ui/styles"
import Typography from "material-ui/Typography"
import ResonateButton from "../Assets/res-resonate-button.svg"
import Select from "material-ui/Select"
import Input, { InputLabel } from "material-ui/Input"
import BlueDivider from "../Assets/orange-divider.svg"
import Button from "material-ui/Button"
import { Link } from "react-router-dom"
import MenuItem from "material-ui/Menu/MenuItem"

const styles = theme => ({
  title: {
    color: "#4B9831",
    margin: "50px 0 24px 0"
  },
  filterLabel: {
    color: "#4B9831"
  },
  resonateButton: {
    position: "fixed",
    cursor: "pointer",
    right: 60,
    bottom: 60,
    "&  img": {
      width: 100,
      height: 100
    }
  },
  filters: {
    marginTop: 100,
    display: "flex",
    width: "100%"
  },
  filter: {
    flex: 1,
    marginBottom: 80,
    padding: 24
  },
  wide: {
    width: "80%"
  }
})
const Header = props => {
  const {
    classes,
    onResonateButton,
    generateResonateLink,
    availableCategories,
    availableMediaTypes,
    categorySelection,
    keywordSelection,
    mediaTypeSelection,
    onCategorySelectionChange,
    onKeywordSelectionChange,
    onMediaTypeSelectionChange
  } = props

  return (
    <div className={classes.container}>
      <Button
        component={Link}
        to={generateResonateLink()}
        className={classes.resonateButton}
      >
        <img src={ResonateButton} />
      </Button>

      <Typography variant="display2" className={classes.title}>
        Learning Hub
      </Typography>

      <img src={BlueDivider} />

      <div className={classes.filters}>
        <div className={classes.filter}>
          <InputLabel htmlFor="age-simple" className={classes.filterLabel}>
            Filter by Category
          </InputLabel>
          <br />
          <Select
            value={categorySelection}
            className={classes.wide}
            onChange={e => onCategorySelectionChange(e.target.value)}
          >
            <MenuItem value={""} />
            {availableCategories.map(c => (
              <MenuItem key={c.id} value={c.name}>
                {c.name}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className={classes.filter}>
          <InputLabel htmlFor="age-simple" className={classes.filterLabel}>
            Filter by Keyword
          </InputLabel>
          <br />
          <Input
            className={classes.wide}
            value={keywordSelection}
            onChange={e => onKeywordSelectionChange(e.target.value)}
          />
        </div>

        <div className={classes.filter}>
          <InputLabel htmlFor="age-simple" className={classes.filterLabel}>
            Filter by Media Type
          </InputLabel>
          <br />
          <Select
            value={mediaTypeSelection}
            className={classes.wide}
            onChange={e => onMediaTypeSelectionChange(e.target.value)}
          >
            <MenuItem value={""} />
            {availableMediaTypes.map(mediaType => (
              <MenuItem key={mediaType} value={mediaType}>
                {mediaType}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(Header)

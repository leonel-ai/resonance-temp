import React from "react"
import TextField from "material-ui/TextField"
import Typography from "material-ui/Typography"
import { withStyles } from "material-ui/styles"
import Paper from "material-ui/Paper"
import Button from "material-ui/Button"
import { Link } from "react-router-dom"

const Result = props => {
  return (
    <div>
      <Typography variant="subheading">
        <Link to={props.url}>{props.title}</Link>
      </Typography>
      <Typography variant="body2">
        {props.match} [{props.type}]
      </Typography>
    </div>
  )
}

const styles = theme => ({
  searchBox: {
    margin: "5em",
    padding: "3em"
  },
  publish: {
    background: "#2d3e95",
    width: 206,
    height: 69,
    color: "white",
    textTransform: "uppercase"
  },
  textSearch: {
    width: "100%",
    marginBottom: "3em"
  },
  results: {
    marginTop: "2em"
  }
})

const Search = props => {
  const {
    hasSearched,
    onSearch,
    results,
    searchText,
    onSearchTextChange,
    classes
  } = props

  const resultCount = results.length
  return (
    <div className={classes.searchBox}>
      <form
        onSubmit={e => {
          e.preventDefault()
          onSearch()
        }}
      >
        <TextField
          value={searchText}
          className={classes.textSearch}
          onChange={e => onSearchTextChange(e.target.value)}
          label="Search For"
        />
        <Button className={classes.publish} onClick={onSearch}>
          Search
        </Button>
      </form>

      <div className={classes.results}>
        {hasSearched && (
          <Typography variant="body2">
            {resultCount} result(s) for "{searchText}"
          </Typography>
        )}
        {results.map((result, i) => {
          return <Result key={`result=${i}`} {...result} />
        })}
      </div>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(Search)

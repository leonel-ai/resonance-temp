import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import { MuiThemeProvider } from "material-ui/styles";
import CssBaseline from "material-ui/CssBaseline";
import makeTheme from "../src/Theme/createMuiTheme";

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const theme = makeTheme()

addDecorator(story => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {story()}
  </MuiThemeProvider>
))

configure(loadStories, module);

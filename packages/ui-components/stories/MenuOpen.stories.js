import React from "react"
import Grid from 'material-ui/Grid'

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import Wrapper from '../src/Wrapper'
import MainMenu from "../src/MainMenu"
import MenuBar from "../src/MenuBar"
import ConnectMenu from '../src/ConnectMenu'

const MAIN_MENU_STATUS_CHANGE = "MAIN_MENU_STATUS_CHANGE"

const closeMenu = () => {
  action(MAIN_MENU_STATUS_CHANGE)(
    JSON.stringify({ type: MAIN_MENU_STATUS_CHANGE, status: 'close' })
  );
  linkTo("Base Screen", "About")();
};

storiesOf("Menu Open", module)
  .add("Hamburger Menu", () => (
    <Wrapper>
      <MenuBar />
      <MainMenu
        handleMenuClose={closeMenu}
      />
    </Wrapper>
  ))
  .add("Connect Menu", () => (
    <Wrapper>
      <MenuBar />
      <ConnectMenu
        handleConnectMenuClose={closeMenu}
      />
    </Wrapper>
  ))

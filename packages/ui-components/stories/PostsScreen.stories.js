import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import Wrapper from "../src/Wrapper"
import MenuBar from "../src/MenuBar"
import BasePostScreen from "../src/Posts"
import PostCard from "../src/Posts/PostCard"
import dummyPostData from "./posts.json"

storiesOf("Post Screen", module).add("Post Screen", () => (
  <Wrapper>
    <MenuBar />
    <BasePostScreen posts={dummyPostData} />
  </Wrapper>
))

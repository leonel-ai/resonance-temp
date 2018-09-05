import { createSelector } from "reselect"

const screenSelector = state => state.mainMenu

export const isOpen = createSelector(screenSelector, state => state.get("open"))

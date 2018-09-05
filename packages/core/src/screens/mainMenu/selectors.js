import { createSelector } from "reselect"

const screenSelector = state => state.connectMenu

export const isOpen = createSelector(screenSelector, state => state.get("open"))

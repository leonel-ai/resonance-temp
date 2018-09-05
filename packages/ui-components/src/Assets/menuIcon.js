import React, { Component } from 'react';
import SvgIcon from 'material-ui/SvgIcon'

const MenuIcon = props => {
  return(
    <SvgIcon {...props}>
      <path d="M0 0h63v3H0zM0 10h63v3H0z"/>
      <path d="M0 10h63v3H0zM0 21h63v3H0z"/>
    </SvgIcon>
  )
}

export default MenuIcon

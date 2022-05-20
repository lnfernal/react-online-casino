import React, { useEffect } from 'react';
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Popover from '@mui/material/Popover';
import './Footer.css'

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
  
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <span variant='subtitle1'>developed by </span>
          <span style={{color: 'white', marginRight: '50px'}}>Nachiket More</span>
        <IconButton className='link-button' aria-label="linkedin">
          <LinkedInIcon />
        </IconButton>
        <IconButton className='link-button' aria-label="github">
          <GitHubIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Footer;

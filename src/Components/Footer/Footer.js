import React from 'react';
import './Footer.css'

import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
  
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <span variant='subtitle1'>developed by </span>
          <span style={{color: 'white', marginRight: '50px'}}>Nachiket More</span>
        <IconButton onClick={() => window.open("https://www.linkedin.com/in/nachiketmore99/")} className='link-button' aria-label="linkedin">
          <LinkedInIcon />
        </IconButton>
        <IconButton onClick={() => window.open("https://github.com/nachiketmore99")} className='link-button' aria-label="github">
          <GitHubIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Footer;

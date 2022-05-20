import React, { useEffect } from 'react';
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Popover from '@mui/material/Popover';
import './Header.css'

import FormDialog from '../FormDialog/FormDialog';


import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { flexbox } from '@mui/system';
import { userLogin, userLogout, addBalance, removeBalance } from '../../Redux';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const loggedIn = useSelector(state => state.login.email)
  const balanceRedux = useSelector(state => state.spin.balance)

  useEffect(()=>{
    console.log('states: ', loggedIn)
  },[])
  
  const [openLogin, setOpenLogin] = React.useState(false);

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleClickLogout = () => {
    const user = {
        email: ''
    }
    dispatch(userLogout(user));
  }

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };



  const handleClickUser = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUser = () => {
    setAnchorEl(null);
  };


  

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
    
  const displayDesktop = () => {
    return (
      <div className='header-container'>
        <Toolbar className='toolbar'>
          <Typography variant='h5'>Online Cassino 🎰</Typography>
            
          <Stack direction="row" spacing={2}>
            
            <Typography  style={{padding: '6px 8px', color: 'white', marginRight: '30px'}}>Balance: ${balanceRedux}</Typography>
            <FormDialog openLogin={openLogin} handleCloseLogin={handleCloseLogin}></FormDialog>

            
            {
                loggedIn=="" ?
                <Button className='button' onClick={handleClickOpenLogin}>Login</Button> :
                
                <div style={{display: 'flex', flexDirection: 'rows', marginLeft: '0' }}>

                  <Typography style={{padding: '6px 10px',}}>{loggedIn}</Typography>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleCloseUser}
                    anchorOrigin={{
                      vertical: 'bottom',
                    }}
                  >
                  </Popover>   
                  <Avatar className='avatar' sx={{ bgcolor: '#a15554', marginRight: '30px' }}
            onClick={handleClickUser}>{loggedIn.charAt(0).toUpperCase()}</Avatar>                  
                  <Button className='button' onClick={handleClickLogout}>Logout</Button> 
                </div>
            }

          </Stack>
        </Toolbar>
      </div>

    );
  };
  
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}

export default Header;

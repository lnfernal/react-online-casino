import React, { useState } from "react";
import { Button } from "@material-ui/core";


import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { userLogin } from '../../Redux';
import { useDispatch } from 'react-redux';


import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const FormDialog = ({openLogin, handleCloseLogin}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };


  const handlePassword = (event) => {
      setPassword(event.target.value);
  };

  const handleUserLogin = async (e) => {
    e.preventDefault();
    const user = {
        email: email
    }
      var response = dispatch(userLogin(user));
      if(response!=''){
          setError(true)
      }
      else{
          setError(false)
      }

      handleCloseLogin()

  }

  
  const handleClickShowPassword = () => {
    if(showPassword == true){
        setShowPassword(false);
    }
    else{
        setShowPassword(true);
    }
  };

  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };

return(
      <Dialog open={openLogin} onClose={handleCloseLogin}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={handleEmail}
          />
          
          <TextField
            margin="dense"
            id="name"
            label="Password"
            value={password}
            type="password"
            fullWidth
            variant="standard"
            type={showPassword ? "text" : "password"}
            onChange={handlePassword}
            InputProps={{ 
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
          />
          
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogin}>Close</Button>
          <Button onClick={handleUserLogin}>Login</Button>
        </DialogActions>
      </Dialog>
    )
  
}

export default FormDialog;

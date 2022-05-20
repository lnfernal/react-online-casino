import React, { useEffect } from 'react';
import { Button, Typography } from "@material-ui/core";

import Spinner from '../Spinner/Spinner'


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { refreshPlays } from '../../Redux';
import { useDispatch, useSelector } from 'react-redux';

import { Store } from 'react-notifications-component';




const FormDialog = ({ openLogin, handleCloseLogin}) => {
  const dispatch = useDispatch();
  const balanceRedux = useSelector(state => state.spin.balance)

  const [gameBalance, setGameBalance] = React.useState(0)

  React.useEffect(()=>{
    setGameBalance(balanceRedux)

  },[])

  React.useEffect(()=>{
    console.log(gameBalance)

  },[gameBalance])

  

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 'auto',
    width: '70px',
    border: '3px solid #A15554',
    borderRadius: '5px',
    color: 'white',
    backgroundColor: '#A15554',
    position: 'relative'
  }));
  
  const spinnerRef1 = React.useRef()
  const spinnerRef2 = React.useRef()
  const spinnerRef3 = React.useRef()

  const handleSpinClick = () =>{
    slotRes = []
    spinnerRef1.current.handleSpin()
    setTimeout(function() { spinnerRef2.current.handleSpin() }, 1000);
    setTimeout(function() { spinnerRef3.current.handleSpin() }, 2000);
  }

  const handleTestSpin = () => {

    spinnerRef1.current.runTestCase()
    spinnerRef2.current.runTestCase()
    spinnerRef3.current.runTestCase()
  }


  var slotRes = []
  var count = Object.entries(localStorage).length-1

  const icons = [
    {
      sign: '♠',
      id: 0
    },
    {
      sign: '♥',
      id: 1
    },
    {
      sign: '♦',
      id: 2
    },
    {
      sign: '♣',
      id: 3
    }
  ]
  

  
  const handleCallback = (childData) =>{
    slotRes = [ ... slotRes, childData]

    console.log('childData, ', childData)
    console.log('Slot Res: ', slotRes)

    if(slotRes.length==3){
      localStorage.setItem(count+1, JSON.stringify({
        id: count+1,
        slot1: icons.find(o => o.id === slotRes[0]).sign,
        slot2: icons.find(o => o.id === slotRes[1]).sign,
        slot3: icons.find(o => o.id === slotRes[2]).sign,
        time: new Date().toLocaleString()
      }));  

      
      count = count + 1

      var temp = ''
      
      if(slotRes.toString()===[0,0,0].toString()){
        console.log('Add $5')
        // dispatch(addBalance(5));
        setGameBalance(balanceRedux+5)
        sendAlert('success', 'Won $5')
      }
      else if(slotRes.toString()===[1,1,1].toString() || slotRes.toString()===[2,2,2].toString() || slotRes.toString()===[3,3,3].toString()){
        console.log('Add $2')
        setGameBalance(balanceRedux+2)
        sendAlert('success', 'Won $2')
      }
      else{
        temp = slotRes.filter((e, i, a) => a.indexOf(e) !== i)
        console.log(temp)
        if(temp[0]!=''){
          console.log('Add $0.5')
          setGameBalance(balanceRedux+0.5)
          sendAlert('success', 'Won $0.5')
        }
        else if(temp==''){
          console.log('remove $2')
          setGameBalance(balanceRedux-2)
        }
      }

    }



  }

  const sendAlert = (type, message) => {
    Store.addNotification({
      title: "Wonderful!",
      message: message,
      type: type,
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true
      }
    });
  }



  useEffect(()=>{
    console.log('Slot Res: ', slotRes)
  },[slotRes])

return(
      <Dialog open={openLogin} onClose={handleCloseLogin}>
        <DialogContent>
          <Typography style={{marginBottom: '30px'}}>Balance: {gameBalance}</Typography>
            
    <Box sx={{ flexGrow: 1 }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={4}>
        <Item>
          <div className='current-icon'></div>
          <Spinner parentCallback = {handleCallback} ref={spinnerRef1} icons = {icons}  />
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <div className='current-icon'></div>
          <Spinner parentCallback = {handleCallback} ref={spinnerRef2} icons = {icons}  />
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <div className='current-icon'></div>
          <Spinner parentCallback = {handleCallback} ref={spinnerRef3} icons = {icons}  />
        </Item>
      </Grid>

    </Grid>
      
    </Box>

        </DialogContent>
        
        <DialogActions style={{position: 'relative', margin: '0 auto'}}>
          <Button className='content-button' onClick={handleSpinClick} >Spin</Button>
          <Button className='content-button' onClick={handleTestSpin}>Test Spin</Button>
          <Button className='content-button' onClick={() => handleCloseLogin(gameBalance)}>Close</Button>
        </DialogActions>
      </Dialog>
    )
  
}

export default FormDialog;

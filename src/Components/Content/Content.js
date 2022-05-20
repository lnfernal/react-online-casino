import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@material-ui/core";
import GameDialog from '../GameDialog/GameDialog'
import './Content.css'


import { addBalance } from '../../Redux';
import { useDispatch, useSelector } from 'react-redux';


const columns = [
  { field: 'id', headerName: 'ID', width: 70, flex: 1, align: 'center', headerAlign: 'center' },
  { field: 'slot1', headerName: 'Slot 1', width: 130, flex: 1, align: 'center', headerAlign: 'center', sortable: false },
  { field: 'slot2', headerName: 'Slot 2', width: 130, flex: 1, align: 'center', headerAlign: 'center', sortable: false },
  { field: 'slot3', headerName: 'Slot 3', width: 130, flex: 1, align: 'center', headerAlign: 'center', sortable: false },
  {
    field: 'time',
    headerName: 'Time',
    width: 230,
    flex: 2, align: 'center', headerAlign: 'center'
  }
];

export default function DataTable() {
  const dispatch = useDispatch();
  const balanceRedux = useSelector(state => state.spin.balance)
  const refreshRedux = useSelector(state => state.spin.refresh)

  
  const [openGame, setOpenGame] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [key, setKey] = React.useState(0);
  

  const handleClickOpenGame = async () => {

    console.log('Balance at play: ', balanceRedux)

    if(balanceRedux>1){
      setOpenGame(true);
    }
    else{
      alert('insufficient balance')
    }
  };

  const handleCloseGame = (gameBalance) => {
    dispatch(addBalance(gameBalance));
    setOpenGame(false);
    handleRefreshData()
  };
  

  const handleRefreshData = () => {
    console.log('refreshing...')
    const items = { ...localStorage };
    var temp = []
    if (items) {
      
        for (const key in items) {
          if ('id' in JSON.parse(items[key])) {
            temp.push(JSON.parse(items[key]))
          }
        }

    }
    
    setRows(temp)
  }

  React.useEffect(()=>{
    setKey(key+1)
  },[rows])

  
  React.useEffect(()=>{
    console.log('Current Balance at start: ', balanceRedux)
    handleRefreshData()
  },[])

  return (
    <div className='content-container' >
      <span>{refreshRedux}</span>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableColumnSelector={true}
        disableColumnFilter={true}
        key={key}
      />
      <span style={{opacity: '1'}} onClick={handleRefreshData}></span>
      <Button className='start-button' onClick={handleClickOpenGame}>Start a Game</Button>
        <GameDialog handleRefreshData={handleRefreshData} openLogin={openGame} handleCloseLogin={handleCloseGame}></GameDialog>
    </div>
  );
}
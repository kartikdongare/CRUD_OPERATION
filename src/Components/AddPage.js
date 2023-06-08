import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import {data} from '../App'

const AddPage = () => {
    
    const [status, setStatus] = useState('');
    const [title,setTitle]=useState('')
    const handleChange = (event) => {
        setStatus(event.target.value);
        console.log(event.target.value);
    };
    let data1=useContext(data);
    let handleClick=()=>{
        data1[data1.length]={id:data1.length,title:title,status:status}
    }
    console.log(data1);
    return (
        <div>
            <div className='bd'>
                <h2>Add Data</h2>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Title"
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </Box>
                <FormControl sx={{ m: 0, width: '50ch' }} size='small'>
                    <Select
                        value={status}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value='' disabled>
                            <em>Select Status</em>
                        </MenuItem>
                        <MenuItem value={'Completed'}>Completed</MenuItem>
                        <MenuItem value={'Incompleted'}>Incompleted</MenuItem>
                    </Select>
                </FormControl>
                <Link to='/'><Button variant="contained" style={{marginTop:'12px'}} onClick={handleClick}>Submit</Button></Link>
            </div>
        </div>
    )
}

export default AddPage

import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import {data} from '../App'

const Upadate = () => {
    let {id,title1,status1}=useParams()
    const [status, setStatus] = useState(status1);
    const [title,setTitle]=useState(title1);
    let data1=useContext(data);
    
    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    let handleEdit=()=>{
        data1[id]={id:id,title:title,status:status}
    }
    return (
        <div>
            <div className='bd'>
                <h2>Edit</h2>
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
                        value={title}
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
                <Link to='/'><Button variant="contained" style={{marginTop:'12px'}} onClick={handleEdit}>Edit</Button></Link>
            </div>
        </div>
    )
}
export default Upadate;

import { Button, Grid } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext, useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import { data } from '../App'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const Home = () => {
    const [titleStatus, setTitleStatus] = useState('');
    const [sortStatus,setSortStatus]=useState();
    const [len, setLen]=useState('');
    let nav=useNavigate()
    const handleChange = (event) => {
        setTitleStatus(event.target.value);
    };
    let data1 = useContext(data)
    useEffect(()=>{
       setSortStatus(data1.filter((x)=>{
        return x.status===titleStatus 
       }))
       if(titleStatus ==='All'|| titleStatus ===''){
        setSortStatus(data1)
       }
    },[titleStatus])
console.log('length',data1.length);

    let handleDelete=(id)=>{
         console.log('id',id);
        delete data1[id]       
        nav('/')
    }
    console.log(sortStatus);
    return (
        <div>
            <div>
                <Grid container direction='row' justifyContent='space-evenly' mt={10}>
                    <Grid item >
                        <Link to='/addpage'><Button variant="contained">Add Data</Button></Link>
                    </Grid>
                    <Grid item >
                        <FormControl sx={{ m: 0, minWidth: 120 }} size='small'>
                            <Select
                                value={titleStatus}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value={''} >
                                    <em>All</em>
                                </MenuItem>
                                {/* <MenuItem value={'All'}>All</MenuItem> */}
                                <MenuItem value={'Completed'}>Completed</MenuItem>
                                <MenuItem value={'Incompleted'}>Incompleted</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid marginLeft={30} marginTop={5}>
                    <TableContainer component={Paper} style={{ width: '800px' }} >
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">Index No </StyledTableCell>
                                    <StyledTableCell align="center">Title</StyledTableCell>
                                    <StyledTableCell align="center">Edit</StyledTableCell>
                                    <StyledTableCell align="center">Delete</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sortStatus?.map((row,index) => (
                                    <StyledTableRow key={row.id}>
                                        <StyledTableCell align='center'>
                                        <Checkbox
                                         checked={row.status==='Completed'} 
                                        />
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.title}</StyledTableCell>
                                        <StyledTableCell align="center" >
                                            <Link to={`/update/${row.id}/${row.title}/${row.status}`} ><EditIcon />
                                            </Link>
                                        </StyledTableCell>
                                        <StyledTableCell align="center" onClick={()=>handleDelete(index)}><DeleteIcon /></StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </div>
        </div>
    )
}

export default Home

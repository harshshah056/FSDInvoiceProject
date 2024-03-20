import {useState} from 'react';
import {Box, Typography,TextField, Button, styled} from '@mui/material';
import { saveInvoice } from '../services/api';
import axios from 'axios';
import { useNavigate } from 'react-router';
const Component = styled(Box)({
     marginTop:20,
     '& > p': {
        fontSize:26,
        marginBottom:10,
     },
     '& > div >div':{
        marginRight:20,
     }
})

const defaultObj={
    vendor: '',
    product:'',
    amount:0,
    date:'',
    action:'pending'
}
const AddInvoice =() => {

    const [invoice, setInvoice]= useState(defaultObj);

    const onValueChange = (e) => {
        setInvoice({...invoice, [e.target.name]: e.target.value});
    }


    const nav=useNavigate();

    const addNewInvoice = async() => {
      //  await saveInvoice({...invoice, amount: Number(invoice['amount'])});

       const responce= await axios.post("http://localhost:9090/invoice",invoice);
       console.log(responce);

       nav("/home")

       
    }

    return(
        <Component>
            <Typography>Add Invoice</Typography>
            <Box>
                <TextField
                    variant="standard"
                    placeholder='Enter vendor name'
                    onChange={(e) => onValueChange(e)}
                    name="vendor"
                    autoComplete="off"
                />
                 <TextField 
                    name="product"
                    variant="standard"
                    placeholder="Enter product name"
                    onChange={(e) => onValueChange(e)}
                    autoComplete="off"
                />
                <TextField 
                    name="amount"
                    variant="standard"
                    placeholder="Enter amount (in Rs)"
                    type="number"
                    onChange={(e) => onValueChange(e)}
                    autoComplete="off"
                />
                 <TextField 
                    name="date"
                    variant="standard"
                    placeholder="Enter date"
                    type="date"
                    onChange={(e) => onValueChange(e)}
                    autoComplete="off"npm install react-router-dom
                />
                <Button
                    variant="contained"
                    onClick={addNewInvoice}
                >
                    Add Invoice!
                </Button>
            </Box>

        </Component>
    )
}

export default AddInvoice;
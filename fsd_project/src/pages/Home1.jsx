
import React,{useEffect, useState} from "react";
import Header from "../components/Header"
import AddInvoice from "../components/AddInvoice";
import Invoices from '../components/Invoices';
import {Box, Typography} from '@mui/material';
import {Button} from '@mui/material'
import axios from "axios";
import { useNavigate } from "react-router";




const Home1=()=> {
    // const [invoices, setInvoices] = useState([{}]);
    // const [addInvoice, setAddInvoice] = useState(false);


    // const toggleInvoice = () => {
    //     setAddInvoice(true);
    // }

//     const [invoices,setInvoice]=useState([{}]);

//     useEffect(async()=>{

// const responce=await axios.get("http://localhost:8080/invoice")
// setInvoice(responce);

//     },[])

const [x,setX]=useState([]);

const nav=useNavigate();

const toggleInvoice=()=>{

    console.log("sui");
    nav("/addcode")
}


useEffect(()=>{

    axios.get("http://localhost:9090/invoice")
    .then((responce)=>{

        console.log(responce);
        setX(responce.data)

    }).catch((e)=>{
        console.log(e);

    })
    



},[])

    return (
        <>
            {/* <Header />
            <Box style={{ margin: 20 }}> */}
                {/* <Typography variant="h4">Pending Invoices</Typography>
                {
                    !addInvoice && 
                        <Button 
                            variant="contained" 
                            onClick={() => toggleInvoice()}
                            style={{ marginTop: 15 }}
                        >Add Invoice</Button>
                } */}

                {/* {
                    addInvoice && <AddInvoice setAddInvoice={setAddInvoice} />
                } */}

                {/* <AddInvoice/> */}


                {/* <Box>
                    
                </Box>
            </Box> */}

            <Header />
            <Button 
                            variant="contained" 
                            onClick={() => toggleInvoice()}
                            style={{ marginTop: 15 }}
                        >Add Invoice</Button>
            <Invoices  invoices={x}/>
        </>
        
    )
}

export default Home1;
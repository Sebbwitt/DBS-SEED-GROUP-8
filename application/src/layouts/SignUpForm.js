import React, {useState} from "react";
import axios from "axios";

import {TextField, Button, makeStyles, Checkbox} from "@material-ui/core";

const SignUpForm = () => {
    const [passNric, setPassNric] = useState(false);
    const [nric, setNric] = useState("");
    const [customer, setCustomer] = useState({
        firstname: "",
        lastname: "",
        age: 18,
        branchcode: 1,
        products:["","","","",""]
    });
    const branchCodes = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,36,37,38,47,48,49,50,51,52,53,54,55,56,57,60,61,62,63,64,65,66,67,69,70,72,74,81,82,96,98,100,104,105,106,107,109,110,113,118,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,254,257,259,287,288,289,347,363,390,391]
    const _handleCheckDraftExist = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:5000/customerbase?nric=${nric}`).then(
            res => {
                console.log(res.data);
                // setCustomer();
            }
        ).catch(
            err => {
                console.log(err);
            }
        )

        //TEMP
        
        setPassNric(true);
    }

    const _handleSignUp = (e) => {
        e.preventDefault();
        // console.log(customer.products);
        console.log(customer.products);
    }

    const classes = useStyles();

    if (!passNric) {
        return (
            <form id="nric-form" onSubmit={_handleCheckDraftExist}>
                <TextField 
                    onChange={e => {setNric(e.target.value)}} 
                    label="NRIC" 
                    id="nric" 
                    type="text"
                    required={true}
                    inputProps={{pattern:"[A-Za-z]{1}[0-9]{7}[A-Za-z]{1}", title:"Please enter a valid NRIC"}}
                    className={classes.textField}
                />
                <Button variant="contained" color="primary" onClick={_handleCheckDraftExist} type="submit">Check</Button>
            </form>
        )
    } else {
        return (
            <form id="sign-up" onSubmit={_handleSignUp}>
                <TextField
                    label="NRIC"
                    id="nric"
                    type="text"
                    required={true}
                    disabled={true}
                    defaultValue={nric}
                    className={classes.textField}
                />
                 <TextField
                    label="Service Officer Name"
                    id="son"
                    type="text"
                    required={true}
                    inputProps={{max:64}}
                    className={classes.textField}
                />
                <br/>
                <TextField
                    label="First Name"
                    id="firstname"
                    type="text"
                    required={true}
                    defaultValue={customer? customer.firstname: ""}
                    className={classes.textField}
                    onChange={e => setCustomer({...customer, firstname: e.target.value})}
                />
                <TextField
                    label="Last Name"
                    id="lastname"
                    type="text"
                    required={true}
                    defaultValue={customer? customer.lastname: ""}
                    className={classes.textField}
                    onChange={e => setCustomer({...customer, lastname: e.target.value})}
                />
                <TextField
                    label="Age"
                    id="age"
                    type="number"
                    required={true}
                    defaultValue={customer? customer.age: 18}
                    inputProps={{min:18}}
                    className={classes.textField}
                    onChange={e => setCustomer({...customer, age: e.target.value})}
                />
                <TextField
                    label="Branch Code"
                    id="branchcode"
                    type="text"
                    required={true}
                    defaultValue={customer?  "0".repeat(3-customer.branchcode.toString().length) + customer.branchcode.toString(): "001"}
                    inputProps={{pattern:"[0-9]{3}"}}
                    className={classes.textField}
                    onChange={e => setCustomer({...customer, branchcode: e.target.value})}
                /><br/>
                Products:<br/>
                137 : Investor <Checkbox
                    name="products[]"
                    value="Investor"
                    onChange={e=> e.target.checked? customer.products[0] = e.target.value : customer.products[0] = ""}
                    // onChange={e => setCustomer({...customer, products: e.target.checked? customer.products.splice(customer.products.indexOf(e.target.value),1): customer.products.push(e.target.value)})}
                />|
                070 : Insurance <Checkbox
                    value="Insurance"
                    onChange={e=> e.target.checked? customer.products[1] = e.target.value : customer.products[1] = ""}
                    // onChange={e => setCustomer({...customer, products: e.target.checked? customer.products.splice(customer.products.indexOf(e.target.value),1): customer.products.push(e.target.value)})}
                />|
                291 : Loans <Checkbox
                    value="Loans"
                    onChange={e=> e.target.checked? customer.products[2] = e.target.value : customer.products[2] = ""}
                    // onChange={e => setCustomer({...customer, products: e.target.checked? customer.products.splice(customer.products.indexOf(e.target.value),1): customer.products.push(e.target.value)})}
                />|
                969 : Savings <Checkbox
                    value="Savings"
                    onChange={e=> e.target.checked? customer.products[3] = e.target.value : customer.products[3] = ""}
                    // onChange={e => setCustomer({...customer, products: e.target.checked? customer.products.splice(customer.products.indexOf(e.target.value),1): customer.products.push(e.target.value)})}
                />|
                555 : Credit Cards <Checkbox
                    value="Credit Cards"
                    onChange={e=> e.target.checked? customer.products[4] = e.target.value : customer.products[4] = ""}
                    // onChange={e => setCustomer({...customer, products: e.target.checked? customer.products.splice(customer.products.indexOf(e.target.value),1): customer.products.push(e.target.value)})}
                />|
                <br/>
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
        )
    }
}


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    }
}));
  
export default SignUpForm;
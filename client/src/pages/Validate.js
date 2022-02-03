import react from 'react';

export default function  Validate(values) {

    let error = {}
    if(!values.firstname) {
        error.firstname = 'First Name is Required'
    }

    if(!values.lastname) {
        error.lastname = 'Last Name is Required'
    }
    if(!values.email) {
        error.email = 'Email is Required'
    }

    if(!values.dateofbirth){
        error.dateofbirth = "Date of birth is Required"
    }

    if(!values.mobile){
        error.mobile = "Phone Number is Required"
    }

    if(!values.identification){
        error.identification = "Choose Something"
    }

    if(!values.address){
        error.address = "Address is Mandatory"
    }
    if(!values.accountNo){
        error.accountNo = "Account Number is Required"
    }
    if(!values.bankName){
        error.bankName = "Bank Name is Required"
    }
    if(!values.tradingBalance){
        error.tradingBalance = "Trading Balance is Required"
    }
    if(!values.password){
        error.password = "Password is Required"
    }else if (values.password.length < 6) {
        error.password = 'Password needs to be 6 characters or more';
    }
    
    if(!values.email) {
        error.email = 'Email is Required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        error.email = 'Email address is invalid';
      }

      return error;
}
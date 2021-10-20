import React from 'react';
import { useState } from 'react';
import './InputForm.css'
import logo from './logo.svg';
import axios from 'axios';

export default function InputForm(props) {
    const [user, setuser] = useState({
        detail : "", date : "", amount : ""
    });

    let name,value;

    const changeHandler = (event)=>{
        name=event.target.name;
        value=event.target.value;

        setuser({...user, [name]:value});
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(user);
        axios
        .post('http://localhost:8000/api',user)
        .then()
        .catch((err) => console.log(err));
    };

    return (
        <>
            <div>
                <img src={logo} className="logo" alt="hellow"/>
            </div>
            <div className="inputdiv">
                <form onSubmit={submitHandler} className="form">
                        <div className="detaildiv mx-3">
                        <label className="mx-3">Enter Expense Detail</label>
                        <input name="detail" type="text" onChange={changeHandler} value={user.detail} required />
                        </div>

                        <div className="datediv">
                        <label className="mx-3 my-3">Enter Date</label>
                        <input name="date" type="date" onChange={changeHandler} value={user.date} required/>
                        </div>

                        <div className="amountdiv">
                        <label className="mx-3 ">Enter Amount</label>
                        <input name="amount" type="number" onChange={changeHandler} value={user.amount} required/>
                        </div>

                        <button type="submit" className="my-3">Add Expense</button>
                </form>
            </div>
       </>
    );
}

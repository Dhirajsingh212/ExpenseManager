import axios from 'axios';
import React from 'react';
import './OutputForm.css';
import {useState, useEffect} from 'react';


export default function OutputForm() {
    const [data, setdata]=useState([]);
    useEffect(()=>{
        clickhandler();
    },[data])

    const clickhandler = ()=>{
        axios
        .get("http://localhost:8000/api/output")
        .then((res)=>setdata(res.data))
        .catch((err)=>console.log(err));
    }

    const deleteHandler = (event)=>{
        axios
        .post("http://localhost:8000/api/delete",{_id: event.target.value})
        .then()
        .catch((err)=>console.log(err));
    }

    return (
        <div className="Outputdiv">
                <div className="row infodiv">
                    <div className="col-4 date">
                        date
                    </div>
                    <div className="col-4 detail">
                        detail
                    </div>
                    <div className="col-4 amount">
                        amount
                    </div>
                </div>
            {data.map((expense, index) => {
                return (
                    <div key={index}>
                        <div className="outerdiv">

                            <div className="row">
                            <div className="col-3 mx-3 date">
                                {expense.date}
                            </div>
                            <div className="col-3 detail">
                                <h2>{expense.detail}</h2>
                            </div>
                            <div className="col-3 amount">
                                {expense.amount}
                            </div>
                            <div className="col-3 deletebtn">
                            <button className="deletebtn" onClick={deleteHandler} value={expense._id}>delete</button>
                            </div>
                            </div>
                            </div>
                    </div>
                );
            })
        }
        </div>
    );
}

// CALLED FROM APP.JS AND PASSING THE ARRAY CONTAINING ...
// VALUES FROM USER AND ITERATING IT TO OUTPUT THE ARRAY USING MAP()
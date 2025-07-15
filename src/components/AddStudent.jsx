import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddStudent = () => {
    const [input, changeInput] = useState(
        {

            name: "",
            roll_number: "",
            admission_number: "",
            college:""

        }
    )

    const inputHandler=(e)=>{
        changeInput({...input,[e.target.name]:e.target.value})
    }


    const readValues=()=>{
        console.log(input)
        axios.post("http://18.144.111.41/student_api.php",input).then(
            (response)=>{
                alert("sucessful added")
            }
        ).catch()
    }
    return (
        <div>
            <NavBar />
            <h1 aLIgn="center">ADD STUDENT</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>Name</label>
                                <input type="text" className="form-control" name='name' value={input.name}  onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>Roll no</label>
                                <input type="text" className="form-control" name='roll_number' value={input.roll_number}  onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>Admission number</label>
                                <input type="text" className="form-control" name='admission_number' value={input.admission_number}  onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>College</label>
                                <input type="text" className="form-control" name='college' value={input.college}  onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <br></br>
                                <button className="btn btn-success" onClick={readValues}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent
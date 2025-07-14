import React from 'react'
import NavBar from './NavBar'

const AddStudent = () => {
  return (
    <div>
        <NavBar/>
        <h1 aLIgn="center">ADD STUDENT</h1>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className='form-label'>Name</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className='form-label'>Roll no</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className='form-label'>Admission number</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className='form-label'>College</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br></br>
                            <button className="btn btn-success">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent
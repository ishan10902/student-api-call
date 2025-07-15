import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {
    const [student, changeStudent] = useState(
        {"status":"success","data":[]}
    )




    const fetchData=()=>{
        axios.get("http://18.144.111.41/view_all_students.php").then(
            (response)=>{
                changeStudent(response.data)
            }
        ).catch()
    }



    useEffect(()=>{fetchData()}, [])
    return (
        <div>
            <NavBar/>
            <h1 align="center">STUDENT VIEW</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <table class="table " className="table table-striped table-hover  table-bordered border-info" >
                                    <thead>
                                        <tr>

                                            <th scope="col">NAME</th>
                                            <th scope="col">ROLL NO</th>
                                            <th scope="col">ADMISSION NO</th>
                                            <th scope="col">COLLEGE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {student.data.map(
                                            (value, index) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">{value.name}</th>
                                                        <td>{value.roll_number}</td>
                                                        <td>{value.admission_number}</td>
                                                        <td>{value.college}</td>
                                                        
                                                    </tr>
                                                )
                                            }
                                        )}
                                    </tbody>

                                </table>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default View
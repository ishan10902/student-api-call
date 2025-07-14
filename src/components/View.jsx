import React, { useState } from 'react'
import NavBar from './NavBar'

const View = () => {
    const [student, changeStudent] = useState(
        [
            {
                "id": "1", "name": "John Doe", "roll_number": "R123", "admission_number": "A456", "college": "ABC College"
            }, { "id": "2", "name": "Rahul R", "roll_number": "1203", "admission_number": "A67456", "college": "ABC College" }, { "id": "3", "name": "Manu K", "roll_number": "35", "admission_number": "9792", "college": "SREE BUDHA COLLEGE " }, { "id": "4", "name": "Navaneeth", "roll_number": "24", "admission_number": "8268", "college": "SBC" }, { "id": "5", "name": "Madhav", "roll_number": "34524", "admission_number": "C342356", "college": "SBCE" }, { "id": "6", "name": "nabeel", "roll_number": "23", "admission_number": "23cs", "college": "sbce" }, { "id": "7", "name": "Vineeth Sreenivasan", "roll_number": "78", "admission_number": "R5626", "college": "Nirmala College" }, { "id": "8", "name": "Mehthab N M", "roll_number": "35", "admission_number": "N869", "college": "Nirmala College of Arts & Science" }, { "id": "9", "name": "Aneez", "roll_number": "2", "admission_number": "8268", "college": "Nirmala College of Arts & Science" }, { "id": "10", "name": "Devadath Pb", "roll_number": "24", "admission_number": "4568", "college": "Nirmala Collage of Arts & Science" }, {
                "id": "11", "name": "Aromal A S", "roll_number": "18", "admission_number": "12356", "college": "Nirmala Collage of Arts & Science"
            }
        ]
    )
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
                                        {student.map(
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
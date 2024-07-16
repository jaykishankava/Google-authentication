import React, { useEffect } from 'react'
import Header from '../Component/Header'
import { useDispatch, useSelector } from 'react-redux'
import { viewUser , deleteUser } from '../Redux/Action/action'

const View = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(viewUser())
    },[])

    const users = useSelector(state => state.crud.user)

    const deleteRecord = (id) => {
        dispatch(deleteUser(id))
        alert("record delete...")
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mx-auto mt-5">
                        <h2>View User</h2>
                        <table className="table border mt-3 table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Courses</th>
                                    <th scope='col'>Department</th>
                                    <th scope='col'>Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((val) => {
                                        console.log(val);
                                        return (
                                            <tr key={val.id}>
                                                <td>{val.id}</td>
                                                <td>{val.name}</td>
                                                <td>{val.email}</td>
                                                <td>{val.password}</td>
                                                <td>{val.gender}</td>
                                                <td>{val.course}</td>
                                                <td>{val.department}</td>
                                                <td>{val.date}</td>
                                                <td className='btn btn-danger mt-2'>
                                                    <button onClick={() => deleteRecord(val.id)} className='btn btn-sm btn-danger'>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default View

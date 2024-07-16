import { getDatabase, ref, set } from 'firebase/database'
import React, { useState } from 'react'
import app from '../firebaseconfig'


function Contact() {
    const db = getDatabase(app)

    const [name,setName] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        let userid = Math.floor(Math.random()*10000);
        set(ref(db,"Contact"+userid),{
            name : name
        })
        setName("")
    }

  return (
    <div>
        <div className="col-lg-6 mx-auto mt-5 border p-3">
            <h2>Realtime Database</h2>
        <form onSubmit={handleSubmit}> 
            Name : <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} value={name} />
        <input type="submit" className='btn btn-primary  mt-3' />
        </form>
        </div>
    </div>
  )
}

export default Contact
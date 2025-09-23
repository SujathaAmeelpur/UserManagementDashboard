

import React, {useEffect,useState} from 'react'
function UserDetailsList(){

    const [users, setUsers] =useState([])
    const [id,setId] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [department, setDepartment] = useState("")

    //fetch users
    useEffect(()=> {
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => setUsers(data));
    },[]);

    const AddUser = () => {
        fetch("http://localhost:3000/users", {
            method:'POST',
            headers:{"Content-Type":
                "application/json"
            },
            body: 
            JSON.stringify({id,firstName,lastName,email,department})
        })
        .then(res => res.json())
        .then(newUser => setUsers([...users,newUser]))
    }



    return(
        <div>
            <h1>User Dashboard</h1>
            <input placeholder='id'
            onChange={e=> setId(e.target.value)} />
            <input placeholder='firstName'
            onChange={e => setFirstName(e.target.value)}
            />
            <input placeholder='lastName' 
            onChange={e => setLastName(e.target.value)}
            />
            <input placeholder='email' 
            onChange={e => setEmail(e.target.value)}
            />
            <input placeholder='department' 
            onChange={e => setDepartment(e.target.value)}
            />
            <button onClick={AddUser} >Add</button>
            <button>Edit</button>
            <button>Delete</button>
            <ul>
                {users.map(user => (
                    <li key = {user.id}>{user.firstName} {user.lastName} {user.email}</li>
                ))}
            </ul>

        </div>
    );

    
}

export default UserDetailsList


import React, {useEffect,useState} from 'react'
import './index.css'
function UserDetailsList(){

    const [users, setUsers] =useState([])
    const [id,setId] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [department, setDepartment] = useState("")
    const [editingUser, setEditingUser] = useState(null)

    //fetch users
    const fetchUsers = ()=> {
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => setUsers(data));
    };
    
    useEffect(()=>{
         fetchUsers();
    },
    []);

    const addUser = () => {
        fetch("http://localhost:3000/users", {
            method:'POST',
            headers:{"Content-Type":
                "application/json"
            },
            body: 
            JSON.stringify({id,firstName,lastName,email,department})
        })
        .then(res => res.json())
        .then(()=> {
            fetchUsers();
            setFirstName("");
            setLastName("");
            setEmail("");
            setDepartment("");
        });
    };

    const deleteUser = (id) => {
        fetch(`http://localhost:3000/users/${id}`,{method:'Delete'})
        .then(() => fetchUsers());
    };

    const startEditing = (user) => {
        setEditingUser(user);
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmail(user.email);
        setDepartment(user.department);
    };

    const updateUser = () => {
        fetch(`http://localhost:3000/users/${editingUser.id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:
            JSON.stringify({firstName,lastName,email,department})
        })
        .then(() => {
            fetchUsers();
            setEditingUser(null);
            setFirstName("");
            setLastName("");
            setEmail("");
            setDepartment("");
            
        });
    };



    return(
        <div className='bg-container'>
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

            {editingUser ? (
                <button onClick={updateUser}>Update User</button>
            ) : (<button onClick={addUser}>Add</button> )}
            
           
            
            <ul>
                {users.map(user => (
                    <li key = {user.id}>{user.firstName} {user.lastName} {user.email}
                     <button onClick={()=> startEditing(user)} >Edit</button>
                     <button onClick={()=> deleteUser(user.id)} >Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    );

    
}

export default UserDetailsList
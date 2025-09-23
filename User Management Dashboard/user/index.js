
import {Component} from 'react'
import './index.css'

class UserInputForm extends Component{
  state = {
    firstName:'',
    lastName:'',
    email:'',
    department:'',
    ShowSubmitErrorMsg:false,
    errorMsg:'',
  }

 

  render(){
    return(
      <>
      <div className='container'>
        <form className='form-container'>
          <div>
            <label htmlfor = "id-input">ID :</label>
            <input id = "id-input" type = 'text'/>
          </div>
          <div>
            <label htmlfor = "name-input">First Name :</label>
            <input id = "name-input" type = 'text'/>
          </div>
          <div>
            <label htmlfor = "name-input">Last Name :</label>
            <input id = "name-input" type = 'text'/>
          </div>
          <div>
            <label htmlfor = "email-input">Email :</label>
            <input id = "email-input" type = 'text'/>
          </div>
          <div>
            <label htmlfor = "department-input">Department :</label>
            <input id = "department-input" type = 'text'/>
          </div>
          <button type = "submit">Submit</button>
        </form>
      </div>
      </>
    )
  }


  
}

export default UserInputForm
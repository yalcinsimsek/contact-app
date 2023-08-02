import React, { useState , useEffect } from 'react'
import List from '../List/İndex';
import Contacts from '..';

function Form({addContacts, contacts}) {
  const defaultFormValue = ({fullname: '', phone_number: ""})
  const [Form, setForm] = useState(defaultFormValue);

useEffect(()=> {

  setForm(defaultFormValue)
},[contacts]);


  const onChangeInput = (e) => {

      setForm({...Form, [e.target.name]: e.target.value})

  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(Form);

    if (Form.fullname === "" || Form.phone_number === ""){

      return false

      };

      addContacts([...contacts, Form]); 
      

  };



  return (
    
    <form onSubmit={onSubmit}>
      <div>
      <h4 className='text2'><span>Add Contact</span></h4>
      <input 
      name="fullname" 
      placeholder='Full Name' 
      value={Form.fullname}
      onChange={onChangeInput}/>
      </div>
      <div>
      <input 
      name="phone_number" 
      placeholder='Phone Number'
      value={Form.phone_number}
      onChange={onChangeInput} />
      </div>
      <div className='btn'>
        <button >ADD</button>
      </div>

    </form>
  )
}

export default Form
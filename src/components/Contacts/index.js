import {useState , useEffect } from 'react'
import List from './List/İndex'
import Form from './Form/İndex'
import "./style.css"

function Contacts() {

const [contacts, setContacts] = useState([
  {
    fullname : "Yalçın Şimşek",
    phone_number: "123123"
},{
  fullname: "Eren Yıldırım",
  phone_number: "159874"
},{
  fullname: "Mehmet Taş",
  phone_number: "789546"
}
])

useEffect(()=>{
  console.log(contacts);
}, [contacts])

  return (
    <div id="container">
      <h1>Contacts</h1>

        <List contacts={contacts}/>
        <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
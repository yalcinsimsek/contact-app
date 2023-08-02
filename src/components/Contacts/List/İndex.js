import {useState} from 'react'

function List({contacts}) {

  const [filterText, setFilterText] = useState("")

  const filtered = contacts.filter((item)=> {
    return Object.keys(item).some((key)=> 
      item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
    )
  })

  
  return (

    
    <div>
      
      <input placeholder='Filter Contact' value={filterText} onChange={(e) => setFilterText(e.target.value)}/>
    <ul className='list'>
    <h4 className='text2'><span>FullName</span> <span>Number</span></h4>
    
      {
      filtered.map((contacts, i )  => (
        <li key={i}>
          <span>{contacts.fullname}</span>
          <span>{contacts.phone_number}</span>
          </li>
      ))


      }



    </ul>

      <p>
        Total Contacts:  {filtered.length}
      </p>
    </div>
  )
}

export default List
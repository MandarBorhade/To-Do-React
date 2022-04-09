import React , {useState} from "react"

function TodoForm() {
  const [input , setInput] = useState('');
  
  const [data , setData] = useState([]);
  
  
  console.log(data);
  

  const handleSubmit = (e) => {
    e.preventDefault();  

   
    
    
    if (input.length == 0){
      alert('Todo cannot be null')
    }
    else{
    const newElement = {id:Math.random(),name:input};
    setData([ newElement , ...data]);
    }
    setInput('');
    
  }
  
  const handlechange = (e) => {
    setInput(e.target.value);
  }
  
  function handleDelete(iid) {
    const filterData = [...data].filter(curElement => curElement.id != iid)
    setData(filterData);
  }
  
  const renderdata = data.map((i) => {
    return(
    <div className='item-container'>
      <div>{i.name}</div>
      <div className='img-background'>
        <img onClick={() => handleDelete(i.id)}src="https://img.icons8.com/officel/80/000000/delete-sign.png"/>
      </div>
    </div>
    )
  })

  
  
  return (
  <div className='container'>
    <div className='logo'>
      <img  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-notes-archaeology-flaticons-flat-flat-icons.png"/>
    </div>
  <form onSubmit={handleSubmit}>
    <input maxlength='50' type='text' placeholder='What to remember today?' value={input} onChange={handlechange}/>
      <button>Add</button>
  </form>
  <div>{renderdata}</div>
  </div>
  )
}

export default TodoForm;
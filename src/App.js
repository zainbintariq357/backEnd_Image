import React ,{useState} from 'react';

function HookCounter() {
  
  // const firstValue = 0
  // const [count, setCount] = useState(firstValue);
  // const [name, setName] = useState({firstName: '', lastName: ''})
     const [names, setNames] = useState([])

  // function incrementByTen()  {
  //   for(let i = 0; i< 10; i++) {
  //     setCount(prevcount => prevcount + 1 )
  //   }
  // }

  const addNames = () => {
    alert('its coming')
    setNames([...names, {
        id: names.length,
        value: Math.floor(Math.random() * 10) + 1
    }])
  } 
  
 return (
    <div>
      <button onClick={addNames}>Show names values</button>
      <ul>
        { names.map(name=>(
          <li key={name.id}>{name.value}</li>
        ))}
      </ul>
    </div>
  //      {items}
  //   <button onClick={addItem} >Add Items</button>
  //     <ul>  
  //     {
  //       items.map(item=>(
  //         <li key={item.id}>{item.value}</li> 
  //       ))
  //     }
  //     </ul>
      
  //     <input type="text" value={name.firstName} onChange={e =>setName({...name, firstName: e.target.value })}/> 
  //     <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>
      
  //     <h1>{name.firstName}</h1>
  //     <h2>{name.lastName}</h2>
  //     <h2>{JSON.stringify(name)}</h2>
  //      <h1>Our will  be : {count}</h1>      
  //    <button onClick = {() => setCount(prevCount => prevCount - 1) }>Decrement value</button>
  //    <button onClick={incrementByTen}>Increment value by 10</button>
  //    <button onClick = {() => setCount(0) }>Refresh value now</button>
  //    <button onClick = {() => setCount(prevCount => prevCount + 1)}>Increment value by 1</button> */}
  //  </div>  
  )
}
export default HookCounter;
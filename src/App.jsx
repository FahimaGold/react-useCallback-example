import { useCallback, useState } from 'react'
import './App.css'
import Items from './components/Item'

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState ([{id: 1, name: "Item 1"}, {id: 2, name: "Item 2"}, {id: 3, name: "Item 3"}]);

  const  handleCounter = () => {
     setCount(() => count + 1);
  }
   // Handling item deletion without useCallback
  const handleItemDelete = (itemId) => {
    const filteredItems = items.filter((item) => item.id  !== itemId);
    setItems(filteredItems);
     
  }

  // Handling item deletion with useCallback
  const handleItemDeleteUseCallback = useCallback((itemId) => {
    const filteredItems = items.filter((item) => item.id  !== itemId);
    setItems(filteredItems);
   
    
 },[items]);

  return (
    <>
    <button onClick={handleCounter}>In crement Counter</button>
    <p>{count}</p>
    <h1>Items</h1>
    {items.map((item) => (
        <Items key={item.id} item={item.name} onDelete={handleItemDelete} itemId = {item.id} />
      ))}
   
    </>
  )
}

export default App

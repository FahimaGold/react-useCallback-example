import {memo} from 'react';
  
const Item = memo(function Item({item, onDelete, itemId}){
    console.log("Child rendering ...")
    return (
        <div>
                <span>{item}</span> <button onClick={()=>onDelete(itemId)}>Delete</button>
            
        </div>
    )
  
})
export default memo(Item);
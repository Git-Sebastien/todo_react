import Button from "./Button"

function TodoItem({isChecked,handleClick,listItem,change}){

    return(
        <ul>
            <li className={isChecked ? "finish" : ""}>
                <Button 
                purpose="Effacer" 
                handleClick={handleClick}
                />
                {listItem}
                <input 
                type="checkbox" 
                name="" id="" 
                checked={isChecked} 
                onChange={change} 
                />       
            </li>

        </ul>
    )
}

export default TodoItem
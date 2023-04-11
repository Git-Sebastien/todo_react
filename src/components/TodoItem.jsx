import Button from "./Button"

function TodoItem(props){
    return(
        <ul>
            <li className={props.isChecked ? "finish" : ""}>
                {props.listItem} - 
                <Button 
                purpose="Effacer" 
                handleClick={props.handleClick}
                /> - 
                <input type="checkbox" 
                name="" id="" 
                checked={props.isChecked} 
                onChange={props.change} />
            </li>
        </ul>
    )
}

export default TodoItem
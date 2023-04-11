import { useState } from "react"

function ToDoForm(props){

    return(
        <form action="" onSubmit={props.handleSubmit}>
            <input type="text" name="" id="" ref={props.handleRef} />
            <button type="submit">Ajouter</button>
        </form>        
    )
}

export default ToDoForm



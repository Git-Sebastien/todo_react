function Button(props){

    return(
        <button onClick={props.handleClick}>{props.purpose}</button>
    )
}

export default Button
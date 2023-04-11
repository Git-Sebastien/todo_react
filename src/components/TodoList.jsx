import { useState,useRef } from "react";
import ToDoForm from "./Form/Form";
import TodoItem from "./TodoItem";
import Button from "./Button";


function TodoList(){
  
  const [list,setList] = useState([]);
  const [error,setError] = useState('');
  const ref = useRef(null);
  
  const handleSubmit = (event) =>{
      event.preventDefault();
      if(ref.current.value.length === 0){
        setError('Veuillez entrez une valeur')
        return;
      }
      setError('')
      setList([...list,{id:list.length + 1,item:ref.current.value,isFinish : false}]);
      ref.current.value = "";
  }

  const removeTodo = (index) => {  
    let arrayFiltered = list.filter((element,indexToDelete) => indexToDelete !== index);
    setList(arrayFiltered);
  }

  const removeList = () => {
    setList([]);
  }

  const checkTask = (id) => {
    setList(
      list.map(item => 
        item.id === id ? {...item,isFinish: !item.isFinish} : item)
    )
  }

  return(
    <div>
      <h1>Ma todo list avec react </h1>
      {error.length > 0 ? <p className="error">{error}</p>: ""}
      <ToDoForm handleSubmit={handleSubmit} handleRef={ref} />
      <Button handleClick={removeList} purpose = "Effacer toute la liste" />
      <div className="list">
          {list.map((element,index) =>
            <TodoItem 
            listItem={element.item} 
            key={index} 
            isChecked={element.isFinish}
            change={()=>checkTask(element.id)}
            handleClick={() => removeTodo(index)} />
          )}
          
      </div>
    </div>
  )
}

export default TodoList
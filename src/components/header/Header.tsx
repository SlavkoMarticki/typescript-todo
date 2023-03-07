import {useState,Dispatch, SetStateAction} from "react";
import { ITodo } from "../../interfaces/Todo";
import "./header.css";

type HeaderProps = {
    addTodo: Dispatch<SetStateAction<ITodo[]>>
}

const Header = (props: HeaderProps) => {
   
    const {addTodo} = props;
    const [task, setTask] = useState("");
    const [deadline, setDeadline] = useState(0);
  

    const addTask = ():void => {
        addTodo(old => [...old ,{task:task, deadline:deadline}]);
    }

    return (
        <div className="headerContainer">
            <input 
                type="text" 
                placeholder="Task"
                onChange={e => {setTask(e.target.value)}}    
            />
            <input 
                type="number" 
                placeholder="Deadline"
                onChange={e => {setDeadline(Number(e.target.value))}}
            />
            <button onClick={addTask} >Add</button>
        </div>
    )
}
export default Header;
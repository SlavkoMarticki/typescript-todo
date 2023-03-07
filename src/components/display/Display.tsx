import { ITodo } from "../../interfaces/Todo";
import "./display.css";
import { Dispatch, SetStateAction } from "react";

type DisplayProps = {
    removeTodo: Dispatch<SetStateAction<ITodo[]>>
}

const Display = (props: {todos: ITodo[], removeTodo: Dispatch<SetStateAction<ITodo[]>> }): JSX.Element => {
    const {todos, removeTodo} = props;

    const deleteTodo = (id: number) => {
        const newArr = todos.filter((item,index) => index != id);
        removeTodo(newArr);
       
        
    }


    return (
        <div>
            {todos.map((todo: ITodo, key: number) => {
                return (
                    <div className="todoContainer">
                        <div className="information">
                            <p> {todo.task} </p>
                            <p> {todo.deadline}</p>
                        </div>
                    
                        <div className="deleteButton">
                            <button onClick={() => {deleteTodo(key)}}>x</button>
                        </div>
                        
                    </div>
                )
                
            })}
            
        </div>
    );
};

export default Display;
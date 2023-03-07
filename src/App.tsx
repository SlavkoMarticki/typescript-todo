import React,{FC, useState} from 'react';
import Header from './components/header/Header';
import Display from './components/display/Display';
import { ITodo } from './interfaces/Todo';


const App = () => {

  const [todoList, setTodoList] = useState<ITodo[]>([]);

  return (
    <div >
      <Header addTodo={setTodoList} />
      <Display 
        todos={todoList}
        removeTodo={setTodoList}
      />
    </div>
  );
}

export default App;

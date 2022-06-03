import './App.css';
import MyHeader from './components/Header'
import AddInput from "./components/AddInput";
import {useCallback, useState} from "react";
import TodoItem from "./components/TodoItem";


function App() {
    const [isInputShow, setInputShow] = useState(false),
        [todoList, setTodoList] = useState([]);

    const addItem = useCallback((value) => {
        const data = {
            id: Date.now().toString(),
            content: value,
            completed: false
        }
        setTodoList(todoList => [...todoList, data])
        setInputShow(false)
    }, [])
    return (
        <div className="App">
            <MyHeader openInput={() => setInputShow(!isInputShow)}/>
            <AddInput isInputShow={isInputShow} addItem={addItem}/>
            <ul className="todo-list">
                {
                    todoList.map((item, index) => {
                        return (
                            <TodoItem data={item} key={index}/>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default App;

import './App.css';
import MyHeader from './components/Header'
import AddInput from "./components/AddInput";
import {useState} from "react";

function App() {
    const [isInputShow, setInputShow] = useState(false),
        [todoList, setTodoList] = useState([]);

    const addItem = (value) => {
        // console.log(value);
        const data = {
            id: Date.now().toString(),
            content: value,
            completed: false
        }
        setTodoList(todoList => [...todoList,data])
        setInputShow(false)
    }
    return (
        <div className="App">
            <MyHeader openInput={() => setInputShow(!isInputShow)}/>
            <AddInput isInputShow={isInputShow} addItem={addItem}/>
        </div>
    );
}

export default App;

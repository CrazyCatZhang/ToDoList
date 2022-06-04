import './App.css';
import MyHeader from './components/Header'
import AddInput from "./components/AddInput";
import {useCallback, useEffect, useState} from "react";
import TodoItem from "./components/TodoItem";
import CheckModal from "./components/Modal/CheckModal";
import EditModal from "./components/Modal/EditModal";


function App() {
    const [isInputShow, setInputShow] = useState(false),
        [todoList, setTodoList] = useState([]),
        [isShowCheckModal, setShowCheckModal] = useState(false),
        [currentDate, setCurrentDate] = useState({}),
        [isShowEditModal, setShowEditModal] = useState(false)

    useEffect(() => {
        const todoData = JSON.parse(localStorage.getItem('todoData') || '[]')
        setTodoList(todoData)
    }, [])

    useEffect(() => {
        localStorage.setItem('todoData', JSON.stringify(todoList))
    }, [todoList])

    const addItem = useCallback((value) => {
        const data = {
            id: new Date().getTime(),
            content: value,
            completed: false
        }
        setTodoList(todoList => [...todoList, data])
        setInputShow(false)
    }, [])

    const openCheckModal = useCallback((value) => {
        setCurrentDate(() => todoList.filter(item => item.id === value)[0])
        setShowCheckModal(true)
    }, [todoList])

    const openEditModal = useCallback((value) => {
        setCurrentDate(() => todoList.filter(item => item.id === value)[0])
        setShowEditModal(true)
    }, [todoList])

    const submitEdit = useCallback((newData, id) => {
        setTodoList((todoList) =>
            todoList.map((item) => {
                if (item.id === id) {
                    item = newData
                }
                return item
            })
        )
        setShowEditModal(false);
    }, [])

    return (
        <div className="App">
            <CheckModal isShowCheckModal={isShowCheckModal} data={currentDate}
                        closeModal={() => setShowCheckModal(false)}/>
            <EditModal isShowEditModal={isShowEditModal} data={currentDate} submitEdit={submitEdit}/>
            <MyHeader openInput={() => setInputShow(!isInputShow)}/>
            <AddInput isInputShow={isInputShow} addItem={addItem}/>
            <ul className="todo-list">
                {
                    todoList.map((item, index) => {
                        return (
                            <TodoItem data={item} key={index} openCheckModal={openCheckModal}
                                      openEditModal={openEditModal}/>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default App;

import React from 'react';
import './index.scss'

function TodoItem(props) {

    const {data: {id, completed, content}, openCheckModal, openEditModal, completeModal,removeModal} = props

    return (
        <li className="todo-item">
            <div className="check-box">
                <input type="checkbox" checked={completed} onChange={() => completeModal(id)}/>
            </div>
            <span className="content" style={{'textDecoration': completed ? 'line-through' : 'none'}}>
                {content}
            </span>
            <div className="btn-group">
                <button className="btn btn-primary" onClick={() => openCheckModal(id)}>查看</button>
                <button className="btn btn-warning" onClick={() => openEditModal(id)}>编辑</button>
                <button className="btn btn-danger" onClick={() => removeModal(id)}>删除</button>
            </div>
        </li>
    );
}

export default TodoItem;
import React, {useRef} from 'react';
import './index.scss'

function AddInput(props) {
    const {isInputShow, addItem} = props
    const inputRef = useRef()
    const submitValue = () => {
        const value = inputRef.current.value.trim()
        if (value.length === 0) return;
        addItem(value)
        inputRef.current.value = ''
    }
    return (
        <>
            {
                isInputShow && (
                    <div className="input-wrapper">
                        <input ref={inputRef} type="text" placeholder="请输入待办事项"/>
                        <button className="btn btn-primary" onClick={submitValue}>增加</button>
                    </div>
                )
            }
        </>
    );
}

export default AddInput;
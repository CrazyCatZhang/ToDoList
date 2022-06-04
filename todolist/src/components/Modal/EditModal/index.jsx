import React, {useRef} from 'react';
import Modal from "../index";
import './index.scss'
import {formatDateTime} from "../../../libs/utils";

function EditModal(props) {

    const {isShowEditModal, data, submitEdit} = props,
        inputRef = useRef(),
        checkRef = useRef()

    const formatNewData = () => {
        const val = inputRef.current.value.trim();
        if (val.length === 0) {
            inputRef.current.value = data.content
            return
        }
        const newData = {
            id: new Date().getTime(),
            content: val,
            completed: checkRef.current.checked
        }
        submitEdit(newData,data.id)
    }

    return (
        <Modal isShowModal={isShowEditModal} modalTitle="编辑事件">
            <p className="topic">时间：{formatDateTime(data.id)}</p>
            <p className="topic">
                <textarea ref={inputRef} className="text-area" defaultValue={data.content}></textarea>
            </p>
            <p className="topic">
                状态：
                <input ref={checkRef} type="checkbox" defaultChecked={!!data.completed} />
            </p>
            <button className="btn btn-primary confirm-btn" onClick={formatNewData}>确定</button>
        </Modal>
    );
}

export default EditModal;
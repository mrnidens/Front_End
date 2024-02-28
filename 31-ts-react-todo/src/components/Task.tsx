import { useRef, useState } from "react";

interface Props {
    index:number,
    removeTask: (index: number) => void,
editTask: (index:number, text:string) => void,
children: string
}

const Task = ({ children, editTask, removeTask, index }: Props) => {

    const [isEdit, setIsEdit] = useState(false);
    const textId = useRef<HTMLTextAreaElement>(null);

    const handleClickEdit = () => {
        setIsEdit(true);
    }

    const handleClickSave = () => {
        editTask(index, textId.current!.value);
        setIsEdit(false);
    }

    const handleClickRemove = () => {
        removeTask(index);
    }

    if (isEdit) {
        return (
            <div className='box'>
                <textarea ref={textId} defaultValue={children}></textarea>
                <button onClick={handleClickSave} className='btn success'>Save</button>
            </div>
        )
    } else {
        return (
            <div className='box'>
                <div>{children}</div>
                <button onClick={handleClickEdit} className='btn light'>Edit</button>
                <button onClick={handleClickRemove} className='btn red'>Remove</button>
            </div>
        )
    }
}

export default Task
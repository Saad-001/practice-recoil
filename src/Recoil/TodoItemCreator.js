import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './atoms';

let id = 0;
const getId = () => id++;

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState('')
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList(currentVal => [
            ...currentVal,
            {
                id: getId(),
                description: inputValue,
                isComplete: false
            }
        ])
        setInputValue('');
    }

    const onChangHandler = ({target: {value}}) => {
        setInputValue(value)
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChangHandler}/>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
};

export default TodoItemCreator;
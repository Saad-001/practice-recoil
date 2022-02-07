import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from './atoms';

const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

const removeItemAtIndex = (arr, index) => {
    console.log(index)
    return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

let globalIndex;

const TodoITem = ({todo}) => {

    const [todoList , setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((todoItem) => {todoItem === todo});
    console.log(index)
    console.log(todoList);

    const focusHandler = ({target: {id}}) => globalIndex = todoList.findIndex(todoItem => todoItem.id == id);

    const changeDescription = ({target: {id, value}}) => {
        globalIndex = id;
        const secondIndex = todoList.findIndex(todoItem =>{console.log(todoItem) ; return todoItem.id == id})
        const newList = replaceItemAtIndex(todoList, secondIndex, {
            ...todo,
            description: value
        })
        setTodoList(newList)
    }

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...todo,
            isComplete: !todo.isComplete
        })
        setTodoList(newList)
    }

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, globalIndex)
        setTodoList(newList)
    }

    return (
        <div>
            <input type="text" value={todo.description} id={todo.id} onFocus={focusHandler} onChange={changeDescription}/>
            <input type="checkbox" checked={todo.isComplete} onChange={toggleItemCompletion} />
            <button onClick={deleteItem}>delete</button>
        </div>
    );
};

export default TodoITem;
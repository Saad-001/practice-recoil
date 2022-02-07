import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from './atoms';
import TodoITem from './TodoITem';
import TodoItemCreator from './TodoItemCreator';

const TodoList = () => {
    const todoList = useRecoilValue(todoListState);
    console.log(todoList);

    return (
        <div>
            <TodoItemCreator/>
            {
                todoList.map((todo) => (<TodoITem key={todo.id} todo={todo}/>))
            }
        </div>
    );
};

export default TodoList;
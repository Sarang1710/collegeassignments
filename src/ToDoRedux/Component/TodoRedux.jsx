import { useSelector, useDispatch } from "react-redux";

import {
	addTodoItem,
	completeTodo,
	deleteTodo,
	fetchTodos,
} from "../todo/actions";

import TodoItem from "./TodoItem";
import TodoForm from "./ToDoForm";

import "./styles.css";
import { useEffect } from "react";

const TodoReduxExample = () => {
	const todoReducer = useSelector((state) => state.todoReducer);
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	const addTodo = (todoText) => {
		dispatch(addTodoItem(todoText));
	};

	const deleteTodoHandler = (id) => {
		dispatch(deleteTodo(id));
	};

	const toggleComplete = (id) => {
		dispatch(completeTodo(id));
	};

	return (
		<div className="todoWrapper">
			<TodoForm addTodo={addTodo} />
			{todoReducer.todos.map((todo) => (
				<TodoItem
					key={todo.id}
					task={todo}
					deleteTodo={deleteTodoHandler}
					toggleComplete={toggleComplete}
				/>
			))}
		</div>
	);
};

export default TodoReduxExample;
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";


import store from './ToDoRedux/store'
import SetCounterComponent from './SetCounterComponent'
import FilterableProductTable from './FilterTableComponents/FilterableProductTable'
import TodoRedux from './ToDoRedux/Component/TodoRedux'
import ToDoAppR from './ToDoApp_R/ToDoAppR'
import ToDoApp from "./ToDoApp/ToDoApp";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} >
					<Route index element={<SetCounterComponent />} />
					<Route path="/filtertablecomponent" element={<FilterableProductTable />} />
					<Route path="/todo" element={<ToDoApp />} />
					<Route path="/todousereducer" element={<ToDoAppR />} />
					<Route path="/todoredux" element={<TodoRedux />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</Provider>
);


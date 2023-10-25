import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className='container mt-5 text-center mx-auto'>
        <div className='row'>
          <div className='col-md-12 '>
            <NavLink to="/" className="btn btn-primary mx-2">SetCounterComponent</NavLink>
            <NavLink to="/filtertablecomponent" className="btn btn-primary mx-2">FilterableProductTable</NavLink>
            <NavLink to="/todo" className="btn btn-primary mx-2">ToDoApp</NavLink>
            <NavLink to="/todousereducer" className="btn btn-primary mx-2">ToDoApp useReducer</NavLink>
            <NavLink to="/todoredux" className="btn btn-primary">ToDoApp Redux</NavLink>
          </div>
          <div className='col-md-12 mt-5'>
            <Outlet />
          </div>
        </div>
      </div>

    </>
  );
}


export default App;

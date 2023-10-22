import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
// import FilterableProductTable from './Components/FilterableProductTable';
// import FilterableTable from './FruitComponent/FilterableTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoReduxExample from './ToDoRedux/Component/TodoRedux';
// import ToDoApp from './ToDoApp/ToDoApp';
// import ToDoApp from './ToDoApp_R/ToDoApp';
const App = ()=>{
  return (
    <div className='container'>
    <div className='row'>
      <div className='col-5'>
    {/* <FilterableProductTable/> */}
    {/* <ToDoApp/> */}
    {/* <FilterableTable/> */}
    <TodoReduxExample/>
      </div>
      </div>
    </div>
    
  );
}


export default App;

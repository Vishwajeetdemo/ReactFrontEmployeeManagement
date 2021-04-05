import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserComponent from './components/UserComponent';
import AddingProduct from './components/AddingProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div>
       <Router>
               <div className="container">
                   <switch>
                      <Route path="/" exact component={UserComponent}></Route>
                      <Route path="/FindAll"  component={UserComponent}></Route>
                      <Route path="/add-product"  component={AddingProduct}></Route>
                      <Route path="/update-product/:id"  component={UpdateProduct}></Route>
                   </switch>
                   
               </div>
       </Router>
    </div>
  );
}

export default App;

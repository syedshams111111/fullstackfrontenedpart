import './App.css';
import {BrowserRouter as Router, Routes} from 'react-router-dom';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import AddEmployee from "./components/AddEmployee";
import ViewEmployee from "./components/ViewEmployee";
import EmployeeTable from "./components/EmployeeTable";
import UpdateEmployee from "./components/UpdateEmployee";
function App() {
  return (
      <Router>
          <div className="App">
          <HeaderComponent/>
              <EmployeeTable/>
            <Routes path = "/add-employee/:id" component = {AddEmployee}></Routes>
            <Routes path = "/view-employee/:id" component = {ViewEmployee}></Routes>
              <Routes path = "/" exact component = {EmployeeTable}></Routes>
              <Routes path = "/employees" component = {EmployeeTable}></Routes>
              {/*<Routes path = "/update-employee/:id" component = {UpdateEmployee}></Routes>*/}
              <FooterComponent/>
              </div>
      </Router>
  );
}

export default App;

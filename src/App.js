import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
import "./output.css";
import reportWebVitals from './reportWebVitals';
import SideMenu from './components/SideMenu';
import ListCreateIntensiv from './components/ListCreateIntensiv';
import Intensives from './components/Intensives';
import Plan from "./components/Plan";
import Commands from './components/Commands';
import CreateCommand from './components/CreateCommand';
import Authorization from "./pages/Authorization";
import { Route,Routes } from "react-router-dom";
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import CreateIntensive from './pages/CreateIntensive'
import { Intensiv } from "./pages/Intensive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Context } from "./context";
import ManageMenu from "./pages/ManageMenu";
import ManageRoles from "./pages/ManageLists/ManageRole";
import ManageProfile from "./pages/ManageLists/ManageProfile";

var Roles = {
  Admin: 0
};

function App() {

  const [idIntensive, setIdIntensive] = useState(); 

  useEffect(()=>{
    console.log('App idIntensive',idIntensive);
    // localStorage.setItem('id', idIntensive);
  },[idIntensive])



  const [key, setKey] = useState();
  let location = useLocation();
  useEffect(()=>{
    setKey(location.key);
    console.log(key);
  },
  [location])


  return (
    <Context.Provider value={[idIntensive, setIdIntensive]}>
    <Header />
    {/* <Intensives/> */}
    {/* <ListCreateIntensiv/> */}
    {/* <Commands/> */}
    {/* <CreateCommand/> */}



  <Routes>
    <Route path='/' element={<Authorization/>} 
          requiredAuthorization={false}></Route>
    <Route path='/intensives' element={<Intensives />} 
          requiredAuthorization={true} accessUser={Roles.Admin}></Route>
    <Route path='/manageMenu' element={<ManageMenu />} 
          requiredAuthorization={true} accessUser={Roles.Admin}></Route>
    <Route path='/plan' element={<Plan/>} 
          requiredAuthorization={true} accessUser={Roles.Admin}></Route >
    <Route path='/createIntensive' element={<ListCreateIntensiv/>} 
          requiredAuthorization={true} accessUser={Roles.Admin}></Route>
    <Route path='/intensiv' element={<Intensiv id={idIntensive}/>} 
          requiredAuthorization={true} accessUser={Roles.Admin}></Route>
    <Route path='/commands/:id' element={<Commands/>} 
          requiredAuthorization={true} accessUser={Roles.Admin}></Route>
   <Route path='/createCom/:id' element={<DndProvider backend={HTML5Backend}><CreateCommand/></DndProvider>}></Route>

   <Route path='/editRoles' element={<ManageRoles />} 
          requiredAuthorization={true} accessUser={Roles.Admin}></Route>
  <Route path='/editProfile' element={<ManageProfile />} 
          requiredAuthorization={true} accessUser={Roles.Admin}></Route>
  {/* <Route path='/editAudit' element={<Mana />} 
          requiredAuthorization={true} accessUser={Roles.Admin}></Route>
  <Route path='/editStudents' element={<ManageRoles />} 
          requiredAuthorization={true} accessUser={Roles.Admin}></Route>
  <Route path='/editRoles' element={<ManageRoles />} 
          requiredAuthorization={true} accessUser={Roles.Admin}></Route>
  <Route path='/editStudents' element={<ManageRoles />} 
          requiredAuthorization={true} accessUser={Roles.Admin}></Route> */}
  </Routes>

  </Context.Provider>
  );
}

export default App;

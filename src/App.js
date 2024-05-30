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
import { Route,Routes } from "react-router-dom";
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

function App() {
  return (
    <>
    <Header />
    {/* <Intensives/> */}
    {/* <ListCreateIntensiv/> */}
    {/* <Commands/> */}
    {/* <CreateCommand/> */}
  

  <Routes>
    <Route path='/intensives' element={<Intensives></Intensives>}></Route>
    <Route path='/plan' element={<Plan></Plan>}></Route>
    <Route path='/createInt' element={<ListCreateIntensiv></ListCreateIntensiv>}></Route>
    <Route path='/commands/:id' element={<Commands></Commands>}></Route>
    <Route path='/createCom/:id' element={<DndProvider backend={HTML5Backend}><CreateCommand></CreateCommand></DndProvider>}></Route>
  </Routes>

    </>
  );
}

export default App;

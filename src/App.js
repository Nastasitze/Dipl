import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
import "./output.css";
import reportWebVitals from './reportWebVitals';
import SideMenu from './components/SideMenu';
import ListCreateIntensiv from './components/ListCreateIntensiv';
import Intensives from './components/Intensives';
import Commands from './components/Commands';
import CreateCommand from './components/CreateCommand';
import { Route,Routes } from "react-router-dom";

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
    <Route path='/createInt' element={<ListCreateIntensiv></ListCreateIntensiv>}></Route>
    <Route path='/commands' element={<Commands></Commands>}></Route>
    <Route path='/createCom' element={<CreateCommand></CreateCommand>}></Route>
  </Routes>

    </>
  );
}

export default App;

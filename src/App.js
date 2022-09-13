import logo from './logo.svg';
import React, {useContext} from 'react';
import Store from './Store';
import { Context } from './Store';
import './App.css';

const NavBar = () =>{

  const [state, setState] = useContext(Context);
  const handleClick = (val) =>{
    setState({page: val});
  }
  return(
    <>
      <button class="Home" style={state.page>0 ? {opacity: "100%"} : {opacity: "0%"}}
              onClick={() => handleClick(0)}>🏠</button>
      <button class="nav" onClick={() => handleClick(1)}>about</button>
      <button class="nav" onClick={() => handleClick(2)}>portfolio</button>
      <button class="nav" onClick={() => handleClick(3)}>resume</button>
      <button class="nav" onClick={() => handleClick(4)}>contact me</button>
    </>);
}

const WebContent = () => {
  const [state, setState] = useContext(Context);
  return (
    <div>
      <div class="NameHolder">

      <p class={state.page == 0 ?  "FullName" : "FullName FullName-Hide"}>Adrian Nieściur</p>
      </div>
      <div class={state.page > 0 ? "NavBar" : "NavBar NavBar-Down"}> 
      <NavBar></NavBar>  
      </div>
    </div>
  );

}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Store>
        <WebContent></WebContent>

        </Store>
      </header>
    </div>
  );
}

export default App;
